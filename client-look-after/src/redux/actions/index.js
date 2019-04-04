import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    
    // ActionsCreators Diapers
    getDiaperByIdRequest: ['id'],
    getDiaperByIdSuccess: ['diaper'],
    getDiaperByIdFailure: ['error'],

    getDiaperRequest: null,
    getDiaperSuccess: ['diapers'],
    getDiaperFailure: ['error'],
    
    createDiaperRequest: ['diaper'],
    createDiaperSuccess: ['diaper'],
    createDiaperFailure: ['error'],
    
    updateDiaperRequest: ['id', 'diaper'],
    updateDiaperSuccess: ['diaper'],
    updateDiaperFailure: ['error'],

    purchaseDiaperRequest: ['id', 'size'],
    purchaseDiaperSuccess: ['diaper'],
    purchaseDiaperFailure: ['error'],
    
    deleteDiaperRequest: ['id'],
    deleteDiaperSuccess: ['id'],
    deleteDiaperFailure: ['error']
})

export default Creators