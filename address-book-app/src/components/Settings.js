import React, {Component} from 'react';
import '../styles/Settings.css';
import changeSettings from '../actions/changeSettings';
import { connect } from 'react-redux';
import Button from './Button.js';
import CheckBox from './CheckBox';

const OPTIONS = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'];

class Settings extends Component {
    
    

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

    submitSelection = () => {
        //this.props.changeSettings(nats)
    }
    
    render(){
        return(
            <div className="Settings">
                <h2>Settings</h2>
                <p>Specify nationality</p>
                <form onSubmit={this.submitSelections}>
                    {this.createCheckBoxes()}
                    <button type="submit" value="Save"></button>
                </form>
                    
                    
                    <div>
                        <Button/>
                    </div>
            </div>
        )
    }
}

export default connect(null, { changeSettings})(Settings)