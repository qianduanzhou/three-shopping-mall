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
console.log('normalUrl', normalUrl, process.env)
let apiList: ApiList = {
    'test': {
        url: 'http://www.zhouhongbin.work:8080/',
        method: 'get',
    }
}

export default apiList;