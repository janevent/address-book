import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBox from '../components/CheckBox';

describe('render CheckBox component', () => {
    render(<CheckBox/>);
    it('renders a checkbox', () => {
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeInTheDocument();
    })
})