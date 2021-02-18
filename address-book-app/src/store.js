import { createStore, applyMiddleware, combineReducers } from 'redux';

import appReducer from './reducer.js';
import settingsReducer from './settingsReducer.js';
import thunk from 'redux-thunk';

const usersReducer = combineReducers({
    users: appReducer,
    nationalities: settingsReducer
})

const store = createStore(usersReducer, applyMiddleware(thunk))

export default store;