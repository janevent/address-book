import React, {Component} from 'react';

export default class SearchBar extends Component {

    render(){
        return (
            <div id="SearchBar">
                <form>
                    <label>Search</label>
                    <input type="text"></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}