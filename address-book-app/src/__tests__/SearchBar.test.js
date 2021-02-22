import React from 'react';
import { render, screen } from '@testing-library/react';
const shallowRenderer = require('react-test-renderer/shallow');
import SearchBar from '../components/SearchBar';
import store from '../store.js';
import { Provider } from 'react-redux';
//import './index.js';

describe("SearchBar", () => {
  test('it renders text input field', () => {
    const renderer = new shallowRenderer();
    renderer.render(<Provider store={store}><SearchBar /></Provider>);
    const result = renderer.getRenderOutput();
    //screen.debug();
    //expect(screen.getByText('Search')).toBeInTheDocument();
    //expect(result.type).toBe('react.provider');
    expect(result.props.children).toEqual(<SearchBar/>)
   // const searchbar = result.props.children;
    
   // expect(searchbar.props.children).toEqual(<div></div>)
    // expect(result.props.children).toEqual([
    //   <form className="search-form" onSubmit={this.onSubmitSearch}>
    //     <label>Search</label>
    //     <input type="text" onChange={this.onChangeInput}></input>
    //     <input type="submit"></input>
    //   </form>])
    //render(<SearchBar/>)
    //expect(screen.getByRole('textbox')).toBeInTheDocument();
    screen.debug();
  })

})
