import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { Provider } from 'react-redux';
import settingsReducer from '../settingsReducer';
import appReducer from '../reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

function createTestStore() {
    const store = createStore(
      combineReducers({
        user: appReducer,
        settings: settingsReducer,
      }),
      applyMiddleware(thunk)
    );
    return store;
}

let store;

describe('renders SearchBar component', () => {
  beforeEach(() => {
    store = createTestStore()
})

it('should display users', () => {
    const {find} = render(
        <Provider store={store}>
            <SearchBar/>
        </Provider>
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument();
})
})