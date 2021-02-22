import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('renders Button component', () => {
    render(<Button/>)
    it('renders a link', () => {
        //render(<Button/>)
        expect(screen.getByRole('link')).toBeInTheDocument();
    })
    it('renders Back To Address Book', () => {
    render(<Button/>)
        expect(screen.getByText(/Back To Address Book/)).toBeInTheDocument();
    })
})