import React, { Component } from 'react';

export default class CheckBox extends React.Component {
componentDidMount(){
    console.log("checkbox mounting")
}

    render(){
        return (
            <label>{this.props.label}
                <input type="checkbox" key={this.props.key} value={this.props.key}></input>
            </label>
        )
    }    
}