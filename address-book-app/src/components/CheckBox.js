import React, { Component } from 'react';

export default class CheckBox extends React.Component {

    render(){
        return (
            <label label={this.props.label}>
                <input type="checkbox" key={this.props.key}></input>
            </label>
        )
    }    
}