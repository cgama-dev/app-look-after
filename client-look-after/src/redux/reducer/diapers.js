import { createReducer } from 'reduxsauce'
import { Types } from '../actions';

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: false,
    saved: false,
    isSaving: false
}


export const getDiaperRequest = (state = INITIAL_STATE, actions) => {
    return {
        ...state,
        isLoading: true,
        error: false
    }
}

export const getDiaperSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: false,
        data: action.diapers
    }
}

export const getDiaperByIdRequest = (state = INITIAL_STATE, actions) => {
    return {
        ...state,
        isLoading: true,
        saved: false,
        error: false
    }
}

export const getDiaperByIdSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        saved: false,
        error: false,
        data: action.diaper
    }
}

export const getDiaperByIdFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        saved: false,
        error: action.error
    }
}

export const createDiaperRequest = (state = INITIAL_STATE, actions) => {
    return {
        ...state,
        isSaving: true,
        saved: false,
        error: false
    }
}

export const createDiaperSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true,
        error: false,
        data: action.diaper
    }
}
export const createDiaperFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: action.error
    }
}

export const updateDiaperRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        saved: false,
        error: false
    }
}
export const updateDiaperSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true,
        error: false,
        data: action.diaper
    }
}
export const updateDiaperFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: action.error
    }
}

export const deleteDiaperRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: false
    }
}

export const deleteDiaperSuccess = (state = INITIAL_STATE, action) => {

    console.log(state)

    let diapers = [...state.data]

    diapers = diapers.filter((item) => item._id !== action.id)

    return {
        ...state,
        isSaving: false,
        data: diapers
    }
}

export const deleteDiaperFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isSaving: false,
        error: action.error
    }
}

export const purchaseDiaperRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        isLoading:true,
        saved: false,
        error: false
    }
}

export const purchaseDiaperSuccess = (state = INITIAL_STATE, action) => {

    let diapers = [...state.data]

    diapers = diapers.map((item) => {
        if(item._id === action.diaper._id){
            item = action.diaper
        }
        return item
    })

    return {
        ...state,
        data: diapers,
        isLoading: false,
        saved: false,
        error: false
    }
}

export const purchaseDiaperFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isLoading: false,
        error: action.error
    }
}


export default createReducer(INITIAL_STATE, {

    [Types.GET_DIAPER_BY_ID_REQUEST]: getDiaperByIdRequest,
    [Types.GET_DIAPER_BY_ID_SUCCESS]: getDiaperByIdSuccess,
    [Types.GET_DIAPER_BY_ID_FAILURE]: getDiaperByIdFailure,

    [Types.GET_DIAPER_REQUEST]: getDiaperRequest,
    [Types.GET_DIAPER_SUCCESS]: getDiaperSuccess,

    [Types.CREATE_DIAPER_REQUEST]: createDiaperRequest,
    [Types.CREATE_DIAPER_SUCCESS]: createDiaperSuccess,
    [Types.CREATE_DIAPER_FAILURE]: createDiaperFailure,

    [Types.UPDATE_DIAPER_REQUEST]: updateDiaperRequest,
    [Types.UPDATE_DIAPER_SUCCESS]: updateDiaperSuccess,
    [Types.UPDATE_DIAPER_FAILURE]: updateDiaperFailure,


    [Types.DELETE_DIAPER_REQUEST]: deleteDiaperRequest,
    [Types.DELETE_DIAPER_SUCCESS]: deleteDiaperSuccess,
    [Types.DELETE_DIAPER_FAILURE]: deleteDiaperFailure,

    [Types.PURCHASE_DIAPER_REQUEST]: purchaseDiaperRequest,
    [Types.PURCHASE_DIAPER_SUCCESS]: purchaseDiaperSuccess,
    [Types.PURCHASE_DIAPER_FAILURE]: purchaseDiaperFailure
})