import React, {Component} from 'react';
import '../styles/User.css';

export default class User extends React.Component{
    constructor(){
        super()
        this.state = {
            show: false
        }
    }
    onClickUser = () => {
        console.log(this.props.user.location, this.props.user.cell, this.props.user.phone)
        this.setState({
            show: true
        })
    }
    render(){
        let {name, picture, email, login, location, cell, phone, nat} = this.props.user
        return(
            <div className="User" onClick={this.onClickUser}>
                <img className="image" src={picture.large}/>
                <h3>{name.title} {name.first} {name.last}</h3>
                <h3>Username: {login.username}  Nat: {nat}</h3>
                <p>Email: {email}</p>
            </div>

        )
    }
}