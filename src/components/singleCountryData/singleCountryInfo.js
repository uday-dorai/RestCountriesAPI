import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleCountry } from '../actions';
import { Link, withRouter } from 'react-router-dom'



class singleCountryInfo extends Component {
    componentDidMount() {
        // console.log(this)
        let country = this.props.match.params.name;
        this.props.singleCountry(country);
    }
    backClick = () => {
        // console.log(this.props.history)
        this.props.history.push('/allcountries')
    }
    onClickHandler = async (e) => {
        // console.log(e.target.getAttribute('name'))
        const countryName = e.target.getAttribute('value');
        await this.props.history.push('/country/' + countryName)
        await this.props.singleCountry(countryName)
    }
    render() {
        // console.log(this.props.match.params.name)
        if (this.props.country !== undefined) {
            return (
                <div id="singleCountry">
                    <button className="backButton" onClick={this.backClick}>
                        back
                    </button>
                    {this.props.country.map((singleCountryInfo) => {
                        return (
                            <div className='belowBackButton'>
                                <img src={singleCountryInfo.flag}></img>
                                <div className='fullInfo'>
                                    <h3 className='fullInfoName'>{singleCountryInfo.name} </h3>
                                    <div className='fullInfoDetails2'>
                                        <div>
                                            <div className="details">
                                                <p className='title'> Native Name:</p>
                                                <p className="data"> {singleCountryInfo.nativeName}</p>
                                            </div>
                                            <div className="details">
                                                <p>Region:</p>
                                                <p className="data"> {singleCountryInfo.region}</p>

                                            </div>
                                            <div className="details">
                                                <p>Population:</p>
                                                <p className="data"> {singleCountryInfo.population}</p>

                                            </div>
                                            <div className="details">
                                                <p>Sub Region:</p>
                                                <p className="data"> {singleCountryInfo.subregion}</p>

                                            </div>
                                            <div className="details">
                                                <p>Capital: </p>
                                                <p className="data">{singleCountryInfo.capital}</p>

                                            </div>
                                        </div>
                                        <div>
                                            <div className="details">
                                                <p>Top Level Domain: </p>
                                                <p className="data">{singleCountryInfo.topLevelDomain}</p>
                                            </div>
                                            <div className="details">
                                                <p>Currencies: </p>
                                                <p className="data">{singleCountryInfo.currencies[0].name}</p>
                                            </div>
                                            <div className="details">
                                                <p>Languages: </p>
                                            </div>



                                        </div>
                                    </div>
                                    <div className='fullInfoDetails3'>
                                        <div className='borderTitle'>Border countries:</div>
                                        <div className='nearCountries'>{this.props.nearCountries.map(nearcountry => {
                                            return (
                                                <div className="nearName" onClick={this.onClickHandler} value={nearcountry.name}>{nearcountry.name}</div>
                                            );
                                        })

                                        }</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }

    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        country: state.countries.singleCountry,
        nearCountries: state.countries.nearCountries
    }
}

const mapDispatchToProps = {
    singleCountry,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(singleCountryInfo))
