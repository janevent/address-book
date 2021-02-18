import React from 'react';
import { connect } from 'react-redux';
import '../styles/AddressBook.css';
import fetchAndAddUsers from '../actions/addUsers';
import SearchBar from './SearchBar';
import Menu from './Menu';
import User from './User';

class AddressBook extends React.Component{

    constructor(props){
        super(props)
        
    }

    scrolling = () => {
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            this.props.fetchAndAddUsers();
        }
    }
    componentDidMount(){
            window.addEventListener("scroll", this.scrolling)
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
        let users = this.props.users.map((u) => {
            
            return <User user={u} key={u.name.last} />
        })
        
        return(
            <div>
                <SearchBar/>
                <Menu/>
                <div className="users-grid">{users}<div className="loader"></div></div>
                
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