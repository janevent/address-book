import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
//import './index.js';

describe("App", () => {
  test('it renders Address Book', () => {
    render(<App/>)
    const addressbook = screen.getByText('Address Book');
    expect(addressbook).toBeInTheDocument();
    //screen.debug();
  })

})

// test('renders Address Book in h1 tags', () => {
//   render(<App />);
//   const addressbook = screen.getByText(/Address Book/i);
//   expect(addressbook).toBeInTheDocument();
// });

// describe('true is truthy and false is falsy', () => {
//   test('true is truthy', () => {
//     expect(true).toBe(true);
//   });
 
//   test('false is falsy', () => {
//     expect(false).toBe(false);
//   });
// });
