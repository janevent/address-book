import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store.js';
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
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            if(this.props.nationalities == undefined || this.props.nationalities.length < 1){
                this.props.fetchAndAddUsers();
            }else{
                let nat = this.props.nationalities.join(',').toLowerCase();
                let n = `&nat=${nat}`
                this.props.fetchAndAddUsers(n);
            }
        }
    }
    componentDidMount(){
            window.addEventListener("scroll", this.scrolling)
            if(this.props.nationalities == undefined || this.props.nationalities.length < 1){
                this.props.fetchAndAddFirstUsers();
            }else{
                let nat = this.props.nationalities.join(',').toLowerCase();
                let n = `&nat=${nat}`
                this.props.fetchAndAddFirstUsers(n);
            }
    }

    render(){
       
        let users = this.props.users.map((u, i) => {            
            return <User user={u} key={u.name.last+i} />
        })
        
        return(
            <Provider store={store}>
            <div>
                <SearchBar/>
                <Menu/>
                <div className="users-grid">
                    {users}
                    <div className="loader"></div>
                </div>                
            </div>
            </Provider>
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