import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
export default class Menu extends Component {

    render(){
        return(
            <div className="Menu">
                
                    <Link to='/'>Address Book</Link>
                    <Link to='/settings'>Settings</Link>
                
            </div>
        )
    }
}