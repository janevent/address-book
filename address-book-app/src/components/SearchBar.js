import React, {Component} from 'react';
import fetchAndAddFirstUsers from '../actions/addFirstUsers';
import '../styles/SearchBar.css';

export default class SearchBar extends Component {

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