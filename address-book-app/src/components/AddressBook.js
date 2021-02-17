import React from 'react';
import { connect } from 'react-redux';
import fetchAndAddUsers from '../actions/addUsers';
import SearchBar from './SearchBar';

class AddressBook extends React.Component{

    constructor(){
        super()
    }


    componentDidMount(){
        this.props.fetchAndAddUsers()
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
const mapStateToProps = (state) => {
    return {
        users: state.users
    } 
}
    

export default connect(mapStateToProps, {fetchAndAddUsers})(AddressBook)