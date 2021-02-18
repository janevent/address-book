import React from 'react';
import { connect } from 'react-redux';
import '../styles/AddressBook.css';
import fetchAndAddUsers from '../actions/addUsers';
import SearchBar from './SearchBar';

class AddressBook extends React.Component{

    constructor(props){
        super(props)
        
    }


    componentDidMount(){
        
            console.log("mounting AddressBook")
            this.props.fetchAndAddUsers();
            // Correct
          //this.setState((state, props) => ({
            //counter: state.counter + props.increment
            //}));
            
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     return {
    //         users: nextProps.users
    //     }
    // }

    render(){
        console.log("users", this.props.users)
        return(
            <div>
                <SearchBar/>
                <h1 className="title">Address Book</h1>
                <div>{this.props.users}</div>
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