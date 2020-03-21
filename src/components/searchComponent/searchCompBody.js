import React, { Component } from 'react';
import FilterRegion from './filterRegion'
class searchCompBody extends Component {
    render() {
        return (
            <div id='search'>
                <input label="search for the country" ></input>
                <FilterRegion/>
            </div>
        )
    }
}

export default searchCompBody
