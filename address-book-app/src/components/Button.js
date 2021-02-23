import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

export default class Button extends React.Component {

    render(){
        return (            
            <Link to="/">
                <button className='button' type="button">Back</button>
            </Link>
        )
    }
}