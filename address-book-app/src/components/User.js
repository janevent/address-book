import React, {Component} from 'react';
import '../styles/User.css';

export default class User extends React.Component{

    render(){
        let {name, picture, email, login, nat} = this.props.user
        return(
            <div className="User">
            <img src={picture.large}/>
                <h3>{name.title} {name.first} {name.last}</h3>
                <h3>Username: {login.username}  Nat: {nat}</h3>
                <p>Email: {email}</p>
            </div>

        )
    }
}