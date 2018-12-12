import axios from 'axios'
import qs from 'qs'
import Router from '../route'
import store from "../store";

// 页面刷新时，重新赋值token
if (localStorage.getItem('token')) {
    store.commit('setToken', localStorage.getItem('token'))
}

let configs = {
    timeout: 10000,
    api: '/sapi'
}

// axios.defaults.headers['auth_key'] = 'a0jDdd9Wto';

// 添加请求拦截器
axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        // 检测某种状态进行重定向
        if (response.data.code === 1002 || response.data.code === 2014 ) {
            store.commit('delToken'); //清空token
            Router.replace({
                name: 'login',
                query: {redirect: Router.currentRoute.fullPath}
            })
        }
        return response
    },
    error => {
        return Promise.resolve(error.response)
    }
)
function extend(target, options) {
    for (name in options) {
        target[name] = options[name];
    }
    return target;
}
function fetch(url, data, method){
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: configs.api,
            data: qs.stringify(data),
            timeout: configs.timeout,
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
        .catch((error) => {
           reject(error)
        })
    })
}
axios.post = function(url, data){
    let common_key = localStorage.getItem('common_key');//未登录时的key
    let token = localStorage.getItem('token');//登录后的key
    let auth_key = token?token:common_key;
    let p = extend({m: url, auth_key: auth_key}, data);
    return fetch(url, p, 'post');
}

export default axios;
