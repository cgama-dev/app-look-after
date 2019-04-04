import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

import reducers from './reducer/index'

import sagas from './sagas/index'

const sagaMidleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMidleware)
)

sagaMidleware.run(sagas)

export default store