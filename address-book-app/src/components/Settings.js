import React, {Component} from 'react';
import Button from './Button.js';
import CheckBox from './CheckBox';

const OPTIONS = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'];

export default class Settings extends Component {
    
    

        state = {
            checkboxes: OPTIONS.reduce(
                (options, option) => ({
                    ...options, 
                    [option]: false
                }),
                {}
            )
        }

    changeSelection = (event) => {

    }
    createCheckBoxes = () => {
        return OPTIONS.map((option) => {
            <CheckBox label={option} isSelected={this.state.checkboxes[option]} changeSelection={this.changeSelection} key={option} />
        })
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