import { all, fork, takeEvery, put ,call} from 'redux-saga/effects'

function* getAllCountryData() {
    yield takeEvery('GET_ALL_COUNTRY_DATA', getAllCountryDataWorker)
}

function* getAllCountryDataWorker() {
    
    const url = `https://restcountries.eu/rest/v2/all`
    const payload = yield fetch(url, { method: 'GET' }).then(resp => { return resp.json() })
    yield put({ type: 'GET_ALL_COUNTRY_DATA_SUCCESS', payload })

}

function* getCountryDataByRegion() {

    yield takeEvery('GET_DATA_BY_REGION', getCountryDataByRegionWorker)

}

function* getCountryDataByRegionWorker(data) {
    const region = data.region
    let url;
    if(region === 'All'){
        url = `https://restcountries.eu/rest/v2/all`
    }else{
        url = `https://restcountries.eu/rest/v2/region/${region}`
    }
    const payload = yield fetch(url, { method: 'GET' }).then(resp => { return resp.json() })
    yield put({ type: 'DATA_BY_REGION', payload })
    

}

function* getSingleCountryFullData() {
    yield takeEvery('SINGLE_COUNTRY_DATA', getSingleCountryFullDataWorker)

}

function* getSingleCountryFullDataWorker(data) {
    const country = data.country
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    let nearCountriesUrl = 'https://restcountries.eu/rest/v2/alpha?codes=';
    const singleCountry = yield fetch(url, { method: 'GET' }).then(resp => { return resp.json() })


    yield fetch(url, { method: 'GET' }).then(resp => { return resp.json() }).then(resp => {
        const countryCodes = resp[0].borders
        for (let codeIndex = 0; codeIndex < countryCodes.length; codeIndex++) {
            if (codeIndex === countryCodes.length - 1) {
                nearCountriesUrl = nearCountriesUrl + countryCodes[codeIndex]
            } else {
                nearCountriesUrl = nearCountriesUrl + countryCodes[codeIndex] + ";"
            }

        }
    })
    const nearCountries = yield fetch(nearCountriesUrl, { method: 'GET' }).then(resp => { return resp.json() })
    let payload={};
    if(nearCountries.status>=400){
         payload = {
            singleCountry: singleCountry,
            nearCountries:[],
        }
    }else{
         payload = {
            singleCountry: singleCountry,
            nearCountries: nearCountries,
        }
    }
    
    yield put({ type: 'SINGLE_COUNTRY_DATA_SUCCESS', payload })

}


function* getSearchCountry() {
    yield takeEvery('SEARCH_COUNTRY', getSearchCountryWorker)
}

function* getSearchCountryWorker(data) {
    const CountryName=data.country
    const url = `https://restcountries.eu/rest/v2/name/${CountryName}`;
    const payload = yield fetch(url, { method: 'GET' }).then(resp => { return resp.json() })
    if(payload.status !== 404){
    yield put({ type: 'SEARCH_COUNTRY_SUCCESS', payload })
    }

}

function* colorChange() {
    yield takeEvery('COLOR_CHANGE', colorChangeWorker)
}

function* colorChangeWorker(data) {
 const color = data.color
 yield put({ type: 'COLOR_CHANGE_SUCCESS', color })

}

export default function* rootSaga() {
    yield all([
        fork(getAllCountryData),
        fork(getCountryDataByRegion),
        fork(getSingleCountryFullData),
        fork(getSearchCountry),
        fork(colorChange),

    ]);
}
