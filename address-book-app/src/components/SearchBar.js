import React, {Component} from 'react';
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

    render(){
        return (
            <div className="SearchBar">
                <form className="search-form">
                    <label>Search</label>
                    <input type="text" onChange={this.onChangeInput}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}