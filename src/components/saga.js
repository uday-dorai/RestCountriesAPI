import {all,fork,takeEvery,put} from 'redux-saga/effects'



function* getData(){
    // console.log('hello')
    yield takeEvery('GET_DATA',getDataWorker)
}

function* getDataWorker(){
    // console.log('worker')
    const url = `https://restcountries.eu/rest/v2/all`
    const payload = yield fetch(url,{method:'GET'}).then(resp => {return resp.json()})
    yield put ({type:'COUNTRY_DATA',payload})
    
}

function* getCountryDataByRegion(){
    yield takeEvery('GET_DATA_BY_REGION',getCountryDataByRegionWorker)

}

function* getCountryDataByRegionWorker(data){
    console.log('worker',data)
    const region = data.region
    const url = `https://restcountries.eu/rest/v2/region/${region}`
    const payload = yield fetch(url,{method:'GET'}).then(resp => {return resp.json()})
    // console.log(payload)
    yield put ({type:'DATA_BY_REGION',payload})
    
}

export default function* rootSaga() {
    yield all([
        fork(getData),
        fork(getCountryDataByRegion),
    ]);
}
