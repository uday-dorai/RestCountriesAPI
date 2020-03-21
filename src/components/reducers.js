
import {COUNTRY_DATA,DATA_BY_REGION} from './constants'
import { combineReducers } from 'redux'

const initialState = {
    
    countryData: [],
}

const reducers = (state = initialState, action) => {

    switch (action.type) {
        case COUNTRY_DATA:
            return{
                countryData:action.payload
            }
        case DATA_BY_REGION:
            console.log(action)
            return{
                countryData:action.payload
            }
        default:
            return state;
    }
},
    rootReducer = combineReducers({
        countries: reducers
    });

export default rootReducer;