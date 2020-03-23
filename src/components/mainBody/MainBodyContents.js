import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapContent,singleCountry} from '../actions'
import {Link,withRouter} from 'react-router-dom'
import SearchBar from '../searchComponent/searchCompBody'


class MainBodyContents extends Component {
    componentDidMount=() =>{
        console.log('hello')
        this.props.mapContent();
    }
    onClickHandler = async(e) =>{
        e.preventDefault()
        // console.log('onClick',e.target.parentElement.parentElement.getAttribute('name'))
        let countryName=e.target.parentElement.parentElement.getAttribute('name');
        // console.log('onClick',this.refs[e.target.parentElement.parentElement.getAttribute('name')]
        
        await this.props.history.push('/country/'+countryName)
        

    }
    render() {
        let regionArray = this.props.data.regionData
        console.log(regionArray.length)

        if(regionArray.length !== 0){
            // console.log('not empty')
            return (
                <div id ='container'>
                    <SearchBar />
                    <div id ='mainBody'>
                    {this.props.data.regionData.map(country =>{
                        let name = country.name;
                        // console.log(name)
                        return(
                            // <Link to={'/'+country.name}>
                                <div className='day' 
                                    onClick={this.onClickHandler} 
                                    key={country.alpha2Code}
                                    ref={country.name}
                                    name={name}
                                    >
    
                                    <div className='imageDiv'>
                                        <img src={country.flag}></img>
                                    </div>
                                    <div className='countryInfo'>
                                        <h4>{country.name}</h4>
                                        <p>Population: {country.population}</p>
                                        <p>Region: {country.region}</p>
                                        <p>Capital: {country.capital}</p>
                                    </div>
                                </div>
                            // </Link>
                        )
                    })}
                    </div>
                </div>
            )
        }else{
            return (
                <div id ='container'>
                    <SearchBar />
                    <div id ='mainBody'>
                    {this.props.data.AllCountryData.map(country =>{
                        let name = country.name;
                        // console.log(name)
                        return(
                            // <Link to={'/'+country.name}>
                                <div className='day' 
                                    onClick={this.onClickHandler} 
                                    key={country.alpha2Code}
                                    ref={country.name}
                                    name={name}
                                    >
    
                                    <div className='imageDiv'>
                                        <img src={country.flag}></img>
                                    </div>
                                    <div className='countryInfo'>
                                        <h4>{country.name}</h4>
                                        <p>Population: {country.population}</p>
                                        <p>Region: {country.region}</p>
                                        <p>Capital: {country.capital}</p>
                                    </div>
                                </div>
                            // </Link>
                        )
                    })}
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        data:state.countries
    }
}

const mapDispatchToProps ={
    mapContent,
    singleCountry,
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MainBodyContents));
