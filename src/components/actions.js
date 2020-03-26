export const mapContent=()=>{
    return {
        type:'GET_ALL_COUNTRY_DATA',
    }
}

export const filterByRegion=(data)=>{
    console.log('region',data)
    return {
        type:'GET_DATA_BY_REGION',
        region:data
    }
}

export const singleCountry=(data)=>{
    console.log('country',data)
    return {
        type:'SINGLE_COUNTRY_DATA',
        country:data
    }
}

export const searchCountry=(data)=>{
    console.log('country',data)
    return {
        type:'SEARCH_COUNTRY',
        country:data
    }
}

export const colorChange=(data)=>{
    return {
        type:'COLOR_CHANGE',
        color:data
    }
}