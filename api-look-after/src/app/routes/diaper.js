const router = require('express').Router()
const DiaperValidation = require('./../validation/diaper-validation')

const {
    findAll,
    findById,
    create,
    update,
    destroy,
    purchase
} = require('./../controllers/diaper')

router.get('/', findAll)
router.get('/:id', findById)
router.post('/', DiaperValidation.validation, create)
router.put('/:id', DiaperValidation.validation, update)
router.delete('/:id', destroy)
router.put('/purchase/:id', purchase)

module.exports = router