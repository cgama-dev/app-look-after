const DiaperService = require('./../services/diaper')

const DiaperController = (() => {

    const findAll = async (_req, res, next) => {
        try {

            let diapers = await DiaperService.findAll()

            diapers = diapers.docs

            return res.status(200).send({ message: 'Diapers found with success', data: diapers })

        } catch (error) {

            return next(error)
        }
    }

    const findById = async (req, res, next) => {
        try {
            const diaperId = req.params.id

            const diaper = await DiaperService.findById(diaperId)

            return res.status(200).send({ mensage: 'Diaper successfully found', data: diaper })

        } catch (error) {
            return next(error)
        }

    }

    const create = async (req, res, next) => {
        try {

            let diaper = await DiaperService.create(req.body)

            diaper = await DiaperService.findById(diaper.id)

            return res.status(201).send({ mensage: 'Diaper created successfully', data: diaper })

        } catch (error) {
            return next(error)
        }

    }

    const update = async (req, res, next) => {
        try {
            const revId = req.params.id
            const data = req.body

            let diaper = await DiaperService.update(revId, data)

            diaper = await DiaperService.findById(diaper.id)

            return res.status(200).send({ mensage: 'Diaper updated ', data: diaper })

        } catch (error) {
            return next(error)
        }
    }

    const destroy = async (req, res, next) => {
        try {
            const diaperId = req.params.id

            await DiaperService.destroy(diaperId)

            return res.status(200).send({ mensage: 'Diaper deleted ' })

        } catch (error) {
            return next(error)
        }
    }

    const purchase = async (req, res, next) => {
        try {
            const id = req.params.id
            const { size, purchase_number } = req.body

            let diaper = await DiaperService.purchase(id, size, purchase_number)

            diaper = await DiaperService.findById(diaper.id)
            
            return res.status(200).send({ mensage: 'Purchase made successfully ', data: diaper })

        } catch (error) {
            return next(error)
        }
    }

    return {
        findAll,
        findById,
        create,
        update,
        destroy,
        purchase
    }
})

module.exports = DiaperController()