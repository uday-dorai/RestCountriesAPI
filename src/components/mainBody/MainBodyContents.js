import React, { Component } from 'react';
import {connect} from 'react-redux';
import {allCountriesData,singleCountry} from '../actions'
import {Link,withRouter} from 'react-router-dom'
import SearchBar from '../searchComponent/searchCompBody'


class MainBodyContents extends Component {
    componentDidMount=() =>{
        this.props.allCountriesData();
    }
    onClickHandler = async(e) =>{
        e.preventDefault()
        let countryName=e.target.parentElement.parentElement.getAttribute('name');
        if(countryName !== null){
        await this.props.history.push('/country/'+countryName)
        }
        

    }
    StyleColor(){
        if(this.props.color){
            return{
                backgroundColor:'hsl(207, 26%, 17%)'
            }
        }else{
            return{
                backgroundColor:'hsl(0, 0%, 90%)',
                color:'hsl(200, 15%, 8%)'

            }
        }
        
    }
    styleColor2(){
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
        let regionArray = this.props.data.regionData
        let searchedCountry = this.props.data.searchedCountry
        let allCountryData=this.props.data.AllCountryData
        let data = [];
        if( searchedCountry && searchedCountry.length !== 0){
            data = searchedCountry;
        }else if(regionArray.length !== 0){
            data = regionArray;
        }else{
            data= allCountryData
        }


            return (
                <div className ='container' style={this.StyleColor()}>
                    <SearchBar />
                    <div id ='mainBody' >
                    {data.map(country =>{
                        let name = country.name;
                        return(
                                <div className='day' 
                                    onClick={this.onClickHandler} 
                                    key={country.alpha2Code}
                                    ref={country.name}
                                    name={name}
                                    style={this.styleColor2()}
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
                        )
                    })}
                    </div>
                </div>
            )
        
    }
}

const mapStateToProps = (state) =>{
    return {
        data:state.countries,
        color:state.countries.color
    }
}

const mapDispatchToProps ={
    allCountriesData,
    singleCountry,
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MainBodyContents));
