import React, { Component } from 'react';
import FilterRegion from './filterRegion'
import { connect } from 'react-redux';
import {searchCountry} from '../actions';

class searchCompBody extends Component {
    onChangeHandler = (e) =>{
        e.preventDefault();
        if(e.target.value !== ''){
            this.props.searchCountry(e.target.value)
        }
        
    }
    inputBoxColor(){
        if(this.props.color){
            return{
            backgroundColor:'hsl(209, 23%, 22%)'

            }
        }else{
            return{
                backgroundColor:'hsl(0, 0%, 100%)',
                color:'hsl(200, 15%, 8%)'

            }
        }
    }
    render() {
        return (
            <div id='search'>
                {/* <form onSubmit={this.onSubmitHandler}> */}
                    <input className='inputBox' placeholder="Search for a country" onChange={this.onChangeHandler} ref='search' style={this.inputBoxColor()}></input>
                {/* </form> */}
                <FilterRegion/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        color:state.countries.color
    }
}

const mapDispatchToProps ={
    searchCountry,
}

export default connect(mapStateToProps,mapDispatchToProps)(searchCompBody)
