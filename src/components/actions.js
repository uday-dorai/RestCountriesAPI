export const mapContent=()=>{
    return {
        type:'GET_DATA',
    }
}

export const filterByRegion=(data)=>{
    console.log('region',data)
    return {
        type:'GET_DATA_BY_REGION',
        region:data
    }
}