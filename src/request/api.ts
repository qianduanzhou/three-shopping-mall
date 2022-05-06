interface ApiList {
    [propName: string]: {
        url: string,
        method ?: any,
        headers ?: any
    }
}

let apiList: ApiList = {
    'getList': {
        url: '/list/get',
        method: 'get',
    }
}

export default apiList;