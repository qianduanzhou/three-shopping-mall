interface ApiList {
    [propName: string]: {
        url: string,
        method ?: any,
        headers ?: any
    }
}

const {
    REACT_APP_NORMALURL: normalUrl,
} = process.env

let apiList: ApiList = {
    'getList': {
        url: normalUrl + '/list/get',
        method: 'get',
    }
}

export default apiList;