import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleCountry } from '../actions';
import { Link, withRouter } from 'react-router-dom'



class singleCountryInfo extends Component {
    componentDidMount() {
        let country = this.props.match.params.name;
        this.props.singleCountry(country);
    }
    backClick = () => {
        this.props.history.push('/allcountries')
    }
    onClickHandler = async (e) => {
        const countryName = e.target.getAttribute('value');
        await this.props.history.push('/country/' + countryName)
        await this.props.singleCountry(countryName)
    }
    styleColor1() {
        if (this.props.color) {
            return {
                backgroundColor: 'hsl(207, 26%, 17%)'
            }
        } else {
            return {
                backgroundColor: 'hsl(0, 0%, 94%)',
                color: 'hsl(200, 15%, 8%)'

            }
        }
    }

    styleColor2() {
        if (this.props.color) {
            return {
                backgroundColor: 'hsl(209, 23%, 22%)'

            }
        } else {
            return {
                backgroundColor: 'hsl(0, 0%, 100%)',
                color: 'hsl(200, 15%, 8%)'

            }
        }
    }

    render() {
        console.log(this.props.nearCountries)
        if (this.props.country !== undefined && this.props.nearCountries !== undefined) {
            let languagesArray=this.props.country.map((singleCountryInfo) => {
                return singleCountryInfo.languages.map(languages=>{
                    
                    return languages.name
                })
            })
            let languages='';
            for(let languagesindex=0;languagesindex<languagesArray.length;languagesindex++){
                languages=languages+languagesArray[languagesindex]
            }

            return (
                <div id="singleCountry" style={this.styleColor1()}>
                    <button className="backButton" onClick={this.backClick} style={this.styleColor2()}>
                        back
                    </button>
                    {this.props.country.map((singleCountryInfo) => {
                        return (
                            <div className='belowBackButton'>
                                <img src={singleCountryInfo.flag}></img>
                                <div className='fullInfo'>
                                    <h3 className='fullInfoName'>{singleCountryInfo.name} </h3>
                                    <div className='fullInfoDetails2'>
                                        <div className='fullInfoDetails4'>
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
                                        <div className='fullInfoDetails4'>
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
                                                <p className="data">{languages}</p>

                                            </div>



                                        </div>
                                    </div>
                                    <div className='fullInfoDetails3'>
                                        <div className='borderTitle'>Border countries:</div>
                                        <div className='nearCountries'>{this.props.nearCountries.map(nearcountry => {
                                            return (
                                                <div className="nearName" onClick={this.onClickHandler} value={nearcountry.name} style={this.styleColor2()}>{nearcountry.name} </div>
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
        nearCountries: state.countries.nearCountries,
        color: state.countries.color
    }
}

const mapDispatchToProps = {
    singleCountry,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(singleCountryInfo))
