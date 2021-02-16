import React from 'react';
import SearchBar from './SearchBar';

export default class AddressBook extends React.Component{

    render(){
        return(
            <div>
                <SearchBar/>
                <h1>Address Book</h1>
            </div>
        )
    }
}