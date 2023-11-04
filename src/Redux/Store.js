import {combineReducers, createStore,applyMiddleware} from 'redux'

import Laptopreducers from './Reducers/Laptopreducers'

import usersReducer from './Reducers/UserReducers';

import thunk from 'redux-thunk'

import logger from 'redux-lgger;'

const rootReducer = combineReducers({
    Laptops:Laptopreducers,
    users:usersReducer

})

const store = createStore(rootReducer,applyMiddleware(thunk,logger))
export default store;