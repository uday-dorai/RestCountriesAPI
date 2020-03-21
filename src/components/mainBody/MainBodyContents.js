import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapContent} from '../actions'

class MainBodyContents extends Component {
    componentDidMount=() =>{
        this.props.mapContent();
    }
    onClickHandler =() =>{
        console.log('onClick')
    }
    render() {
        console.log(this.props.data)
        return (
            <div id ='mainBody'>
                {this.props.data.map(country =>{
                    return(
                        <div className='day' onClick={this.onClickHandler}>
                            <div className='imageDiv'>
                                <img src={country.flag}></img>
                            </div>
                            <div className='countryInfo'>
                                <label>{country.name}</label>
                                <p >Population:{country.population}</p>
                                <p>Region:{country.region}</p>
                                <p>Capital:{country.capital}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        data:state.countries.countryData
    }
}

const mapDispatchToProps ={
    mapContent,
}

export default connect(mapStateToProps,mapDispatchToProps)(MainBodyContents);
