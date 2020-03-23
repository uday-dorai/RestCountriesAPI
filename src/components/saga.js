import { all, fork, takeEvery, put } from 'redux-saga/effects'

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
    console.log(region)
    const url = `https://restcountries.eu/rest/v2/region/${region}`
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

    const payload = {
        singleCountry: singleCountry,
        nearCountries: nearCountries,
    }
    yield put({ type: 'SINGLE_COUNTRY_DATA_SUCCESS', payload })

}

export default function* rootSaga() {
    yield all([
        fork(getAllCountryData),
        fork(getCountryDataByRegion),
        fork(getSingleCountryFullData),
    ]);
}
