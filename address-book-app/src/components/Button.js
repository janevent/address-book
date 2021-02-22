import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Button extends React.Component {

    render(){
        return (
            <Router>
            <Link to="/">
                <button type="button">Back To Address Book</button>
            </Link>
            </Router>
        )
    }
}