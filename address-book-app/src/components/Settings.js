import React, {Component} from 'react';
import Button from './Button.js';

export default class Settings extends Component {
    render(){
        return(
            <div className="Settings">
                <h2>Settings</h2>
                <div>
                    <label>Pick A Country</label>
                        <select id="list">
                            <option value="EU">EU</option>
                        </select>
                    </div>
                    <div>
                        <Button/>
                    </div>
            </div>
        )
    }
}