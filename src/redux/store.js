import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { fetchCollectionsStart } from './shop/shop.sagas'

import rootReducer from './root.reducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = (process.env.NODE_ENV === 'development') ? 
    [
        sagaMiddleware, 
        logger
        
    ] 
    : 
    [
        thunk
    ]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store)

export default { store, persistor }