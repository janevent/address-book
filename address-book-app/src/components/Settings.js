import React, {Component} from 'react';
import '../styles/Settings.css';
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
        let op = event.target.value;
        console.log(op)
        this.setState((prevState) => {
            return {
                checkboxes: {
                    ...prevState.checkboxes,
                    [op]: !prevState.checkboxes[op]
                }
            }
        })
        console.log(this.state)
    }
    createCheckBox = (option) => (   
            <CheckBox label={option} isSelected={this.state.checkboxes[option]} changeSelection={this.changeSelection} key={option} />   
    )

    createCheckBoxes = () => {
        return OPTIONS.map(this.createCheckBox) 
    }
    
    render(){
        return(
            <div className="Settings">
                <h2>Settings</h2>
                <p>Specify nationality</p>
                <form>
                    {this.createCheckBoxes()}
                </form>
                    
                    
                    <div>
                        <Button/>
                    </div>
            </div>
        )
    }
}