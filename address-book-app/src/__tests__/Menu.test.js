import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '../components/Menu';

describe('renders Menu', () => {
    it('renders link', () => {
        render(<Menu/>);
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument();
    })
})
