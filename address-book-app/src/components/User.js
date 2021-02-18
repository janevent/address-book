import React, {Component} from 'react';

export default class User extends React.Component{

    render(){
        return(
            <div className="user">
                <h1>{this.props.user.name.first}</h1>
            </div>

        )
    }
}