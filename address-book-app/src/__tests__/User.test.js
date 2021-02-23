import React from 'react';
import { render, screen } from '@testing-library/react';
import User from '../components/User';

let user;
describe('renders User component', () => {
    beforeEach(() => {
        user = {name: {title: 'Mr', last: 'B', first: 'A' }, picture: { large: 'alien.jpg'}, nat: 'CH', email: 'awaitsgiraffe@example.com', login: {username: 'giraffe123'}}
    })
    
    it('renders username', () => {
        const { find } = render(
            <User user={user}/>
        )
        expect(screen.getByText(/giraffe123/)).toBeInTheDocument();
    })
})
