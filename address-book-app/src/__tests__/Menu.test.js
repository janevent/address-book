import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Menu from '../components/Menu';

describe('renders Menu', () => {
    it('renders link', () => {
        render(<Router><Menu/></Router>);
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument();
    })
})
