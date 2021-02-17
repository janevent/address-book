import React from 'react';
import { connect } from 'react-redux';
import '../styles/AddressBook.css';
import fetchAndAddUsers from '../actions/addUsers';
import SearchBar from './SearchBar';

class AddressBook extends React.Component{

    constructor(){
        super()
    }


    componentDidMount(){
        this.props.fetchAndAddUsers()
        console.log("mounting AddressBook")
    }

    render(){
        return(
            <div>
                <SearchBar/>
                <h1 className="title">Address Book</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    } 
}
    

export default connect(mapStateToProps, {fetchAndAddUsers})(AddressBook)