import React, {Component} from 'react';
import '../styles/User.css';

export default class User extends React.Component{

    render(){
        let {name, picture, email, login} = this.props.user
        return(
            <div className="User">
            <img src={picture.large}/>
                <h1>{name.title} {name.first} {name.last}</h1>
                <h3>Username: {login.username}</h3>
                <p>Email: {email}</p>
            </div>

        )
    }
}