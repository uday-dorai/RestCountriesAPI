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

export default function* rootSaga() {
    yield all([
        fork(getData),
    ]);
}
