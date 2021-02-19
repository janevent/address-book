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
        console.log("in scrolling")
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            //works for fullscreen
            console.log("scrolled to the bottom")
            this.props.fetchAndAddUsers();
        }
    }
    componentDidMount(){
            window.addEventListener("scroll", this.scrolling)
            console.log("mounting AddressBook")
            console.log(this.props)
            if(this.props.nationalities == undefined ){
                console.log("if")
                this.props.fetchAndAddUsers();
            }else{
                console.log("else")
                let nats = this.prop.nationalities.join(',').toLowerCase();
                let n = `&nats=${nats}`
                this.props.nationalities(n)
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
        console.log("users", this.props.users)
        let users = this.props.users.map((u, i) => {
            
            return <User user={u} key={u.name.last+i} />
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
        users: state.users,
        nationalites: state.nationalities
    } 
}
    

export default connect(mapStateToProps, {fetchAndAddUsers})(AddressBook)