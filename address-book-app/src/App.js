import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Settings from './components/Settings';
import AddressBook from './components/AddressBook';

export default class App extends React.Component {
  constructor(){
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
          <Settings />
          <AddressBook users={this.state.users}/>
      </div>
    );
  }
}


