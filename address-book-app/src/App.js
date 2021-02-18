import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

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
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/" component={AddressBook} />
          </Switch>
        
      </div>
    );
  }
}


