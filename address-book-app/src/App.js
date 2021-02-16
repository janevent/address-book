import React from 'react';
import './App.css';

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

export default App;
