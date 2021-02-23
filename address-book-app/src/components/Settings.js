import React, {Component} from 'react';
import '../styles/Settings.css';
import changeSettings from '../actions/changeSettings.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Button from './Button.js';
import CheckBox from './CheckBox';

const OPTIONS = ['CH','ES','FR', 'GB'];

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
        this.setState((prevState) => {
            return {
                checkboxes: {
                    ...prevState.checkboxes,
                    [op]: !prevState.checkboxes[op]
                }
            }
        })
    }
    createCheckBox = (option) => (   
            <CheckBox label={option} isSelected={this.state.checkboxes[option]} changeSelection={this.changeSelection} key={option} />   
    )

    createCheckBoxes = () => {
        return OPTIONS.map(this.createCheckBox) 
    }

    submitSelections = (event) => {
        event.preventDefault();
        let nats = Object.keys(this.state.checkboxes).filter((k) => {
            return this.state.checkboxes[k] === true
        })
        this.props.changeSettings(nats)
        this.props.history.push('/');
    }
    
    render(){
        return(
            <div className="Settings">
                 <Button/>
                <h2>Settings</h2>
                <p>Specify nationality</p>
                <form onSubmit={this.submitSelections}>
                    {this.createCheckBoxes()}
                    <input type="submit" value="Save" className="input-item"></input>
                </form>                    
            </div>
        )
    }
}

export default connect(null, { changeSettings})(Settings)