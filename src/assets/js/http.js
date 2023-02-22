import axios from 'axios';
import QS from 'qs';
import common from '@/assets/js/common.js'
import store from '../../store/store'
import router from '../../router/router'
import {Toast} from "vant";

axios.defaults.timeout = 20000;
axios.defaults.baseURL ='';

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        // 登录失效
        if(response.data.isLogin == false || response.data.msg == '请先登陆'){
            store.commit('pushIsLogin',false)
            router.push({
                path:"/login",
                query:{redirect:router.history.current.fullPath}//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)
//http response 拦截器
axios.interceptors.response.use(
    timeout => {
        // if(response.data.errCode ==2){
        //     router.push({
        //         path:"/login",
        //         query:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
        //     })
        // }
        return timeout;
        // console.log(response)
    },
    error => {
        Toast('请求超时,请刷新页面重试')
        return Promise.reject(error)
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={},loading){
    url = store.state.apiUrl + url
    if(loading)common.loading(loading)
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
            .then(response => {
                if(loading)common.loading(false)
                resolve(response.data);
            })
            .catch(err => {
                if(loading)common.loading(false)
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data,loading){
    url = store.state.apiUrl + url
    if(loading)common.loading(loading)
    return new Promise((resolve,reject) => {
        axios.post(url,QS.stringify(data))
            .then(response => {
                if(loading)common.loading(false)
                resolve(response.data);
            },err => {
                if(loading)common.loading(false)
                reject(err)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {},loading){
    url = store.state.apiUrl + url
    if(loading)common.loading(loading)
    return new Promise((resolve,reject) => {
        axios.patch(url,data)
            .then(response => {
                if(loading)common.loading(false)
                resolve(response.data);
            },err => {
                if(loading)common.loading(false)
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {},loading){
    url = store.state.apiUrl + url
    if(loading)common.loading(loading)
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                if(loading)common.loading(false)
                resolve(response.data);
            },err => {
                if(loading)common.loading(false)
                reject(err)
            })
    })
}
