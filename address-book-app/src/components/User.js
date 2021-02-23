import React, {Component} from 'react';
import '../styles/User.css';


export default class User extends React.Component{
    constructor(){
        super()
        this.state = {
            Show: false
        }
       // this.onClickUser = this.onClickUser.bind(this)
        //this.exitUser = this.exitUser.bind(this)
    }
    onClickUser = () => {
        //document.querySelector('.Modal').classList.remove("display-none")
        //console.log(this.props.user.location, this.props.user.cell, this.props.user.phone)
        this.setState({ Show: true })       
    }

    exitUser = () => {
        console.log(this.state)
        this.setState({Show: false})
        //document.querySelector('.Modal').classList.add("display-none");
        //console.log("exit", this.state)
        setTimeout(() => { console.log(this.state) }, 10000)
    }

    render(){
        let {name, picture, email, login, nat} = this.props.user
        return(
            
            <div className="User">
                <img className="image" src={picture.large}/>
                <h3>{name.title} {name.first} {name.last}</h3>
                <h3>Username: {login.username}  Nat: {nat}</h3>
                <p>Email: {email}</p>               
            </div>
            
            

        )
    }
}