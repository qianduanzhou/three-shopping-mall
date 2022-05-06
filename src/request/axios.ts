import axios from 'axios';
import store from "store/index";

let { NORMALURL: normalUrl, NODE_ENV } = process.env;
let baseURL = NODE_ENV === 'development' ? '/normalUrl' : String(normalUrl);
const instance = axios.create({
    baseURL,//基础url
    timeout: 30000,//请求超时时间
})

// request拦截器
instance.interceptors.request.use((config: any) => {
    let token = store.getState()?.user?.token
    if(token) {
        if(config.params) {
            config.params.token = token
        } else {
            config.params = {
                token
            }
        }
    }
    return config
}, (err: any) => {
    Promise.reject(err)
})

// response 拦截器
instance.interceptors.response.use(
    (response: any) => {
        const res: any = response.data
        let result: any;
        if(res.code === 200) {
            result = res.data
        } else {
            result = res
        }
        return result
    },
    (error: any) => {
        console.log('err: ' + error) // for debug
        return Promise.reject(error)
    }
)

export {instance}