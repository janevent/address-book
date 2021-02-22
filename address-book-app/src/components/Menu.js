import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../styles/Menu.css';

export default class Menu extends Component {

    render(){
        return(
            <div className="Menu">
                <Router>
                    <Link to='/settings'>Settings</Link>   
                </Router>           
            </div>
        )
    }
}