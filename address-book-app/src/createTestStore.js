import { createStore, applyMiddleware, combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import appReducer from './reducer';
import thunk from 'redux-thunk';

export default function createTestStore() {
    const store = createStore(
      combineReducers({
        user: appReducer,
        settings: settingsReducer,
      }),
      applyMiddleware(thunk)
    );
    return store;
}
