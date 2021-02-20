import React from 'react';
import { connect } from 'react-redux';
import '../styles/AddressBook.css';
import fetchAndAddUsers from '../actions/addUsers';
import fetchAndAddFirstUsers from '../actions/addFirstUsers';
import SearchBar from './SearchBar';
import Menu from './Menu';
import User from './User';

class AddressBook extends React.Component{

    constructor(props){
        super(props)
        
    }

    scrolling = () => {
        console.log("in scrolling")
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            //works for fullscreen
            console.log("scrolled to the bottom")
            //this.props.fetchAndAddUsers();
            console.log("scroll", this.props)
            if(this.props.nationalities == undefined || this.props.nationalities.length < 1){
                console.log("if scroll")
                this.props.fetchAndAddUsers();
            }else{
                console.log("else scroll")
                let nat = this.props.nationalities.join(',').toLowerCase();
                let n = `&nat=${nat}`
                this.props.fetchAndAddUsers(n);
            }
        }
    }
    componentDidMount(){
            window.addEventListener("scroll", this.scrolling)
            console.log("mounting AddressBook")
            console.log(this.props)
            console.log(this.props.nationalities)
            if(this.props.nationalities == undefined || this.props.nationalities.length < 1){
                console.log("if")
                this.props.fetchAndAddFirstUsers();
            }else{
                console.log("else")
                let nat = this.props.nationalities.join(',').toLowerCase();
                let n = `&nat=${nat}`
                this.props.fetchAndAddFirstUsers(n);
            }
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
       
        let users = this.props.users.map((u, i) => {            
            return <User user={u} key={u.name.last+i} />
        })
        
        return(
            <div>
                <SearchBar/>
                <Menu/>
                <div className="users-grid">
                    {users}
                    <div className="loader"></div>
                </div>                
            </div>
        )
    }
}
const mapStateToProps = ({users, nationalities}) => {
    return {
        users,
        nationalities
    } 
}
    

export default connect(mapStateToProps, {fetchAndAddUsers, fetchAndAddFirstUsers})(AddressBook)