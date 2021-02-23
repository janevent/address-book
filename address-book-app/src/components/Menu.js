import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

export default class Menu extends Component {

    render(){
        return(
            <div className="Menu">               
                    <Link to='/settings'>Settings</Link>                              
            </div>
        )
    }
}