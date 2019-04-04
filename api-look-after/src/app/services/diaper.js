const moment = require('moment')
const DiaperModel = require('./../model/diaper')
const ValidationError = require('./../validation/validation-error')

const DiaperService = (() => {

    const findAll = async () => {
        try {

            const q = { selector: { status: { "$eq": true } } }

            return await DiaperModel.find(q)

        } catch (error) {
            throw ValidationError.message(`Error finding diapers :: ${error}`)
        }
    }

    const findOne = async (filter = {}) => {
        try {
            return await DiaperModel.find(filter)
        } catch (error) {
            throw ValidationError.message(`Error finding diapers :: ${error}`)
        }
    }

    const findById = async (id) => {
        try {
            return await DiaperModel.get(id)
        } catch (error) {
            throw ValidationError.message(`Error finding diaper :: ${error}`)
        }
    }

    const create = async (data) => {
        
        //Default details diaper
        data.diaper_details = data.diaper_details.map((item) => {
            item.purchased = 0
            item.available = item.quantity
            item.available_time = ""
            item.last_purchase = ""
            return item
        })

        const diaper = {
            ...data,
            status: true,
            created_at: moment().format(),
            updated_at: moment().format()
        }
        try {
            return await DiaperModel.insert(diaper)
        } catch (error) {
            throw ValidationError.message(`Error creating diaper :: ${error}`)
        }
    }

    const update = async (id, data) => {

        const findDiaper = await findById(id)

        const {_id, _rev } = findDiaper

        // update available
        data.diaper_details = data.diaper_details.map((item) => {
            item.available = item.quantity - item.purchased
            return item
        })

        const diaper = {
            _id,
            _rev,
            ...data,
            updated_at: moment().format()
        }
        try {
            return await DiaperModel.insert(diaper, { _rev })
        } catch (error) {
            throw ValidationError.message(`Error updating diaper :: ${error}`)
        }
    }

    const destroy = async (id) => {

        const diaper = await findById(id)

        const { _rev } = diaper

        const newDiaper = {
            ...diaper,
            status: false,
            updated_at: moment().format()
        }
        try {
            return await DiaperModel.insert(newDiaper, {
                _rev
            })
        } catch (error) {
            throw ValidationError.message(`Error finding diaper`)
        }
    }

    const timeEndDiapers = (last_purchase, availability) => {

        const now_purchase = moment()

        const diffDate = moment.duration(now_purchase.diff(last_purchase))

        const available_time = Math.ceil(diffDate.asMinutes() * availability)

        return available_time
    }

    const updateDiaperDetails = (details, size, purchase_number) => {

        let available_time = ""

        const diaper_details = details.find((value) => {
            return value.size === size
        })

        if (!diaper_details)
            throw ValidationError.message(`Size not available for this model`)

        const { quantity, available, purchased, last_purchase } = diaper_details

        const availability = (quantity - (purchased + purchase_number))

        if (available === 0)
            throw ValidationError.message(`There are no more sizes for this model`)

        if (!(purchase_number <= available))
            throw ValidationError.message(`There are only ${available} items available for purchase`)

        if (last_purchase) {
            available_time = timeEndDiapers(last_purchase, availability)
        }

        const newDiaperDetails = {
            ...diaper_details,
            purchased: (purchased + purchase_number),
            available: availability,
            available_time: available_time,
            last_purchase: moment().format()
        }

        return newDiaperDetails
    }

    const purchase = async (id, size, purchase_number) => {

        const diaper = await findById(id)

        const newDiaperDetails = updateDiaperDetails(diaper.diaper_details, size, purchase_number)

        const diaper_details = diaper.diaper_details.map((item) => {
            if (item.size === size) {
                item = newDiaperDetails
            }
            return item
        })

        const newDiaper = { ...diaper, diaper_details }

        return await DiaperModel.insert(newDiaper, { _rev: diaper._rev })

    }

    return {
        findAll,
        findById,
        findOne,
        create,
        update,
        destroy,
        purchase
    }
})


module.exports = DiaperService()