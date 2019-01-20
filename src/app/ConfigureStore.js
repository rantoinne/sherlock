import { createStore, applyMiddleware, compose } from 'redux'
import storage from 'redux-persist/es/storage'
import { createLogger } from 'redux-logger';
import reducers from './reducers'
import { persistStore, persistCombineReducers } from 'redux-persist'

const reducer = persistCombineReducers({ key: 'watson44', storage }, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, {}, composeEnhancers(applyMiddleware(createLogger())))
let persistor = persistStore(store)

export { store, persistor }