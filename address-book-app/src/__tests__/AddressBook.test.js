import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import settingsReducer from '../settingsReducer'
import appReducer from '../reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import AddressBook from '../components/AddressBook';
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

describe('renders AddressBook', () => {
    beforeEach(() => {
        store = createTestStore()
    })

    it('should display users', () => {
        const {find} = render(
            <Provider store={store}>
                <AddressBook/>
            </Provider>
        )
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
})
 
