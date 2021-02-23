import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
//const renderer = require('react-test-renderer')
import settingsReducer from '../settingsReducer';
import appReducer from '../reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import AddressBook from '../components/AddressBook';
import thunk from 'redux-thunk'
//import configureMockStore from 'redux-mock-store';
//const middlewares = [thunk]
//const mockStore = configureMockStore(middlewares)



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
 
// const mockStore = configureStore({});

// describe('renders users from store', () => {
//     let store;
//     let component;

//     beforeEach(() => {
//         store = mockStore({
//         myState: {
//             users: [{name: {title: 'Mrs', first: 'Geraldo', last: 'Thorp'}, login: {}, email: 'pandas@example.com', nat: 'CA'}],
//             nationalities: []},
//         });
//         component = renderer.create(
//             <Provider store={store}>
//                 <AddressBook />
//             </Provider>
//         );
//     });

//     test('renders users', () => {
//         //expect(component.toJSON()).toMatchSnapshot();
//     })
// })