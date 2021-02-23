import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('renders Button component', () => {
    render(<Router><Button/></Router>)
    it('renders a link', () => {
        expect(screen.getByRole('link')).toBeInTheDocument();
    })
    it('renders Back To Address Book', () => {
    render(<Router><Button/></Router>)
        expect(screen.getByText(/Back/)).toBeInTheDocument();
    })
})