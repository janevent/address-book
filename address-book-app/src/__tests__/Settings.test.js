import createTestStore from '../createTestStore.js';
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Settings from '../components/Settings';


let store;

describe('renders Settings component', () => {
    beforeEach(() => {
        store = createTestStore()
    })
    
    it('should display settings options', () => {
        render(<Provider store={store}>
                    <Router>
                        <Settings/>
                    </Router>
                </Provider>)
        expect(screen.getByText(/CH/)).toBeInTheDocument();
        //screen.debug()
    })
    it('should render checkboxes', () => {
        render(<Provider store={store}>
                    <Router>
                        <Settings/>
                    </Router>
                </Provider>)
        expect(screen.queryAllByRole('checkbox'))
    })
})