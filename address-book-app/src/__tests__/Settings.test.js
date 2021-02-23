import createTestStore from '../createTestStore.js';
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
//import renderer from 'react-test-renderer';
//const renderer = require('react-test-renderer')
import settingsReducer from '../settingsReducer';
import appReducer from '../reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import Settings from '../components/Settings';
import thunk from 'redux-thunk'

let store;

describe('renders Settings component', () => {
    beforeEach(() => {
        store = createTestStore()
    })
    
    it('should display settings options', () => {
        render(<Provider store={store}>
            <Settings/>
        </Provider>)
        expect(screen.getByText(/DK/)).toBeInTheDocument();
        //screen.debug()
    })
    it('should render checkboxes', () => {
        render(<Provider store={store}>
            <Settings/>
        </Provider>)
        expect(screen.queryAllByRole('checkbox'))
    })
})