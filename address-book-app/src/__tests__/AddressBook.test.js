import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
//const renderer = require('react-test-renderer')

import AddressBook from '../components/AddressBook';

import configureStore from 'redux-mock-store';
 
const mockStore = configureStore([]);

describe('renders users from store', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
        myState: {
            users: [{name: {title: 'Mrs', first: 'Geraldo', last: 'Thorp'}, login: {}, email: 'pandas@example.com', nat: 'CA'}],
            nationalities: []},
        });
        component = renderer.create(
            <Provider store={store}>
                <AddressBook />
            </Provider>
        );
    });

    test('renders users', () => {
        //expect(component.toJSON()).toMatchSnapshot();
    })
})