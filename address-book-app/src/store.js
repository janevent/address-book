import { createStore } from 'store';
import appReducer from 'reducer.js';

const store = createStore(appReducer)

export default store;