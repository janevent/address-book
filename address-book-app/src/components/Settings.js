import React, {Component} from 'react';

export default class Settings extends Component {
    render(){
        return(
            <div className="Settings">
                <h2>Settings</h2>
                <label>Pick A Country</label>
                <select id="list">
                    <option value="EU">EU</option>
                </select>
            </div>
        )
    }
}