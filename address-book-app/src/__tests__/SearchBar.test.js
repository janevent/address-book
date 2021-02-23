import React from 'react';
import { render, screen } from '@testing-library/react';
const shallowRenderer = require('react-test-renderer/shallow');
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

// describe("SearchBar", () => {
//   test('it renders text input field', () => {
//     const renderer = new shallowRenderer();
//     renderer.render(<Provider store={store}><SearchBar /></Provider>);
//     const result = renderer.getRenderOutput();
//     //screen.debug();
//     //expect(screen.getByText('Search')).toBeInTheDocument();
//     //expect(result.type).toBe('react.provider');
//     expect(result.props.children).toEqual(<SearchBar/>)
//    // const searchbar = result.props.children;
    
//    // expect(searchbar.props.children).toEqual(<div></div>)
//     // expect(result.props.children).toEqual([
//     //   <form className="search-form" onSubmit={this.onSubmitSearch}>
//     //     <label>Search</label>
//     //     <input type="text" onChange={this.onChangeInput}></input>
//     //     <input type="submit"></input>
//     //   </form>])
//     //render(<SearchBar/>)
//     //expect(screen.getByRole('textbox')).toBeInTheDocument();
//     screen.debug();
//   })

// })
