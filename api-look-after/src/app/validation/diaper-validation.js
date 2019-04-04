const ValidationError = require('./validation-error')

const DiaperValidation = (() => {

    const validation = (req, res, next) => {
        const data = req.body

        if (!ValidationError.isRequerid(data.model))
            throw ValidationError.message(`Field model is Required`)

        if (!ValidationError.isRequerid(data.description))
            throw ValidationError.message(`Field description is Required`)

        if (!ValidationError.isRequerid(data.price))
            throw ValidationError.message(`Field price is Required`)

        if (!ValidationError.isRequerid(data.diaper_details))
            throw ValidationError.message(` Array diaper_details is Required`)

        if (!ValidationError.isRequeridDetails(data.diaper_details))
            throw ValidationError.message(`All Fields quantity and size is Required`)

        next()
    }

    return {
        validation
    }
})

module.exports = DiaperValidation()