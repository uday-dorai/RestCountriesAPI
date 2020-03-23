
import {GET_ALL_COUNTRY_DATA_SUCCESS,DATA_BY_REGION,SINGLE_COUNTRY_DATA_SUCCESS} from './constants'
import { combineReducers } from 'redux'

const initialState = {
    
    AllCountryData: [],
    regionData:[],
    singleCountry:[],
    nearCountries:[],
    all:true,
}

const reducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_COUNTRY_DATA_SUCCESS:
            
            return{
                AllCountryData:action.payload,
                regionData:state.regionData,
            }
        case DATA_BY_REGION:
            
            return{
                AllCountryData:action.payload,
                regionData:action.payload
            }
        case SINGLE_COUNTRY_DATA_SUCCESS:
            
            return{
                AllCountryData:state.AllCountryData,
                regionData:state.regionData,
                singleCountry:action.payload.singleCountry,
                nearCountries:action.payload.nearCountries,

            }
        default:
            return state;
    }
},
    rootReducer = combineReducers({
        countries: reducers
    });

export default rootReducer;