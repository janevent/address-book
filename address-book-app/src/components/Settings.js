import React, {Component} from 'react';
import Button from './Button.js';

export default class Settings extends Component {
    
    OPTIONS = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'];

        state = {
            checkboxes: OPTIONS.reduce(
                (options, option) => ({
                    ...options, 
                    [option]: false
                }),
                {}
            )
        }
    
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