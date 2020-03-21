import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapContent} from '../actions'

class MainBodyContents extends Component {
    componentDidMount=() =>{
        this.props.mapContent();
    }
    onClickHandler =(e) =>{
        e.preventDefault()
        console.log('onClick',e.target.parentElement.parentElement.getAttribute('name'))
        console.log('onClick',this.refs[e.target.parentElement.parentElement.getAttribute('name')])

    }
    render() {
        // console.log(this.props.data)
        return (
            <div id ='mainBody'>
                {this.props.data.map(country =>{
                    let name = country.name;
                    // console.log(name)
                    return(
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
                                <p>Population:{country.population}</p>
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
