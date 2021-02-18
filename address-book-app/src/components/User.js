import React, {Component} from 'react';
import '../styles/User.css';

export default class User extends React.Component{

    render(){
        return(
            <div className="User">
            <img src={this.props.user.picture.large}/>
                <h1>{this.props.user.name.first}</h1>
            </div>

        )
    }
}