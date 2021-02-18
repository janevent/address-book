import { createStore, applyMiddleware, combineReducers } from 'redux';

import appReducer from './reducer.js';
import thunk from 'redux-thunk';

const usersReducer = combineReducers({
    users: appReducer
})

const store = createStore(usersReducer, applyMiddleware(thunk))

export default store;