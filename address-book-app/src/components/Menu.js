import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
export default class Menu extends Component {

    render(){
        return(
            <div className="Menu">
                <Router>
                    <Link to='/addressbook'>Main</Link>
                    <Link to='/settings'>Settings</Link>
                </Router>
            </div>
        )
    }
}