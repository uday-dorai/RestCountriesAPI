
import {
    GET_ALL_COUNTRY_DATA_SUCCESS,
    DATA_BY_REGION,
    SINGLE_COUNTRY_DATA_SUCCESS,
    SEARCH_COUNTRY_SUCCESS,
    COLOR_CHANGE_SUCCESS
} from './constants'
import { combineReducers } from 'redux'

const initialState = {
    
    AllCountryData: [],
    regionData:[],
    singleCountry:[],
    nearCountries:[],
    searchedCountry:[],
    all:true,
    color:true
}

const reducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_COUNTRY_DATA_SUCCESS:
            
            return{
                AllCountryData:action.payload,
                regionData:state.regionData,
                color:state.color

            }
        case DATA_BY_REGION:
            
            return{
                AllCountryData:action.payload,
                regionData:action.payload,
                color:state.color

            }
        case SINGLE_COUNTRY_DATA_SUCCESS:
            
            return{
                ...state,
                nearCountries:action.payload.nearCountries,
                singleCountry:action.payload.singleCountry,
                

            }
        case SEARCH_COUNTRY_SUCCESS:
        
            return{
                AllCountryData:state.AllCountryData,
                regionData:state.regionData,
                searchedCountry:action.payload,
                color:state.color

            }
        case COLOR_CHANGE_SUCCESS:
        
            return{
                ...state,
                color:action.color

            }
        default:
            return state;
    }
},
    rootReducer = combineReducers({
        countries: reducers
    });

export default rootReducer;