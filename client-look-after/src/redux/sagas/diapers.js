import api from './../../services'

import { put } from 'redux-saga/effects'

import ActionsCreators from '../actions/index'

export function* getDiapers() {

    const diaper = yield api.get('diapers')

    yield put(ActionsCreators.getDiaperSuccess(diaper.data.data))
}

export function* createDiaper(action) {

    try {
        const diaper = yield api.post('diapers', action.diaper)
        yield put(ActionsCreators.createDiaperSuccess([diaper.data.data]))

    } catch (e) {
        const { error } = e.response.data
        yield put(ActionsCreators.createDiaperFailure(error))

    }
}


export function* getDiapersById(action) {

    try {
        const diaperId = action.id
        const diaper = yield api.get('diapers/' + diaperId)
        yield put(ActionsCreators.getDiaperByIdSuccess([diaper.data.data]))
    } catch (e) {
        const { error } = e.response.data
        yield put(ActionsCreators.getDiaperByIdFailure(error))
    }

}

export function* updateDiaper(action) {
    try {
        const diaperId = action.id
        const diaper = yield api.put('diapers/' + diaperId, action.diaper)

        yield put(ActionsCreators.updateDiaperSuccess([diaper.data.data]))
    } catch (e) {
        const { error } = e.response.data
        yield put(ActionsCreators.getDiaperByIdFailure(error))
    }
}

export function* deleteDiaper(action) {

    try {
        const diaper = yield api.delete('diapers/' + action.id)
        yield put(ActionsCreators.deleteDiaperSuccess(action.id))
    } catch (e) {
        const { error } = e.response.data
        yield put(ActionsCreators.deleteDiaperFailure(error))
    }

}

export function* purchaseDiaper(action) {

    try {
        const diaper = yield api.put('diapers/purchase/' + action.id, {
            size: action.size,
            purchase_number: 1
        })

        yield put(ActionsCreators.purchaseDiaperSuccess(diaper.data.data))

    } catch (e) {
        const { error } = e.response.data
        yield put(ActionsCreators.purchaseDiaperFailure(error))
    }

}