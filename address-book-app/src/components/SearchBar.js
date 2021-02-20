import React, {Component} from 'react';
import fetchAndAddFirstUsers from '../actions/addFirstUsers';
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
        console.log("state", this.state.input)
        let array = this.state.input.toLowerCase().split(" ")
        console.log(array[0], array[1])
        let filteredUsers = this.props.users.filter( (user) => {
            return user.name.first.toLowerCase() === array[0] || user.name.last.toLowerCase() === array[1]
        })
        console.log(filteredUsers)
    }

    render(){
        return (
            <div className="SearchBar">
                <form className="search-form" onSubmit={this.onSubmitSearch}>
                    <label>Search</label>
                    <input type="text" onChange={this.onChangeInput}></input>
                    <input type="submit"></input>
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

export default connect(mapStateToProps)(SearchBar)