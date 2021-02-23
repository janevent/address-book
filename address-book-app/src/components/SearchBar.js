import React, {Component} from 'react';
import setFilteredUsers from '../actions/setFilteredUsers';
import { connect } from 'react-redux';
import '../styles/SearchBar.css';

class SearchBar extends Component {

    state= {
        input: ""
    }

    onChangeInput = (event) => {
        let input = event.target.value;
        this.setState({
            input
        })
    }

    onSubmitSearch = (event) => {
        event.preventDefault();
        let array = this.state.input.toLowerCase().split(" ")
        let filteredUsers = this.props.users.filter( (user) => {
            return user.name.first.toLowerCase() === array[0] || user.name.last.toLowerCase() === array[1]
        })
        this.props.setFilteredUsers(filteredUsers)
    }

    render(){
        return (           
            <div className="SearchBar">
                <form className="search-form" onSubmit={this.onSubmitSearch}>
                    <label>Search    <input type="text" onChange={this.onChangeInput}></input>  </label>
                    <input className='submit' type="submit"></input>
                </form>                
            </div>            
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps, { setFilteredUsers })(SearchBar)