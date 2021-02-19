import React, { Component } from 'react';

export default class CheckBox extends React.Component {
componentDidMount(){
    console.log("checkbox mounting")
}

    render(){
        return (
            <label>{this.props.label}
                <input type="checkbox" onChange={this.props.changeSelection} value={this.props.label}></input>
            </label>
        )
    }    
}