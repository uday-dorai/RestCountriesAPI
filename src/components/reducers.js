
import {COUNTRY_DATA} from './constants'
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
        default:
            return state;
    }
},
    rootReducer = combineReducers({
        countries: reducers
    });

export default rootReducer;