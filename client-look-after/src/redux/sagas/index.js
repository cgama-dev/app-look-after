
import { takeLatest } from 'redux-saga/effects'

import { Types } from './../actions/index'

import { getDiapers, createDiaper, getDiapersById, updateDiaper, deleteDiaper, purchaseDiaper } from './diapers'

export default function* rootSagas() {
    yield takeLatest(Types.GET_DIAPER_REQUEST, getDiapers)
    yield takeLatest(Types.CREATE_DIAPER_REQUEST, createDiaper)
    yield takeLatest(Types.GET_DIAPER_BY_ID_REQUEST, getDiapersById)
    yield takeLatest(Types.UPDATE_DIAPER_REQUEST, updateDiaper)
    yield takeLatest(Types.DELETE_DIAPER_REQUEST, deleteDiaper)
    yield takeLatest(Types.PURCHASE_DIAPER_REQUEST, purchaseDiaper)
}