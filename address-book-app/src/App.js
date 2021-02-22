import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
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
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Address Book</h1>
        </header>
        <Router>
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/" component={AddressBook} />
          </Switch>
        </Router>
      </div>
      </Provider>
    );
  }
}


