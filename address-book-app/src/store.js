import { createStore, applyMiddleware } from 'redux';

import appReducer from './reducer.js';
import thunk from 'redux-thunk';


const store = createStore(appReducer, applyMiddleware(thunk))

export default store;