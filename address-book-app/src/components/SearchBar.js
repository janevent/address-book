import React, {Component} from 'react';
import '../styles/SearchBar.css';

export default class SearchBar extends Component {

    render(){
        return (
            <div className="SearchBar">
                <form className="search-form">
                    <label>Search</label>
                    <input type="text"></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}