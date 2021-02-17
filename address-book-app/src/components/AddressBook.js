import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

class AddressBook extends React.Component{

    constructor(){
        super()
    }

    fetchUsers(){

    }

    componentDidMount(){
        this.fetchUsers()
    }
    render(){
        return(
            <div>
                <SearchBar/>
                <h1>Address Book</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, map)(AddressBook)