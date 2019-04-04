const Validatation = (() => {

    const message = (message) => {
        return {
            name: 'ValidationError',
            message
        }
    }

    const isRequerid = (value) => {
        if (!value || value.length <= 0) {
            return false
        } else {
            return true
        }
    }

    const isNumber = (value)=>{
        if(!(Number.isInteger(value))){
            return false
        }else{
            return true
        }
    }

    const isRequeridDetails = (values) => {
        let validationFields = []
        values.forEach(value => {
            if (isRequerid(value.size) && isRequerid(value.quantity) && isNumber(value.quantity))  {
                validationFields = [...validationFields, true]
            } else {
                validationFields = [...validationFields, false]
            }
        })

        return validationFields.includes(false) ? false : true
    }

    return {
        message,
        isRequerid,
        isNumber,
        isRequeridDetails
    }
})

module.exports = Validatation()