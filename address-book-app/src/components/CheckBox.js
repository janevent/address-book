import React, { Component } from 'react';
import '../styles/CheckBox.css';

export default class CheckBox extends React.Component {

    render(){
        return (
            <label className="CheckBox">{this.props.label}
                <input type="checkbox" onChange={this.props.changeSelection} value={this.props.label}></input>
            </label>
        )
    }    
}