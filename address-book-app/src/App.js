import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Settings from './components/Settings';
import AddressBook from './components/AddressBook';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  }  

  fetchUsersData(){

  }

  componentDidMount(){

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Address Book</h1>
        </header>
          <Menu/>
        <Router>
          <Switch>
            <Route path="/settings"><Settings/></Route>
            <Route path="/main"><AddressBook/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}


