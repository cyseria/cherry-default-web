/**
 * @file 请求拦截的相关配置
 * @author Cyseria
 */

import axios from 'axios';
import {message} from 'antd';

axios.defaults.timeout = 30000; // 默认超时时间 30s （创建考勤需要的事件有点长）
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 失败后的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 2000;

// 请求拦截
axios.interceptors.request.use(
    config => {
        config.withCredentials = true; // 需要跨域打开此配置
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
axios.interceptors.response.use(
    response => {
        const data = response.data;
        // if (!!data.code === 401) {
        //     // 未登录
        //     window.location.href = data.data.redirectUrl;
        // }
        return response.data;
    },
    error => { // 请求出错
        if (!!error.response && !!error.response.data) {
            const res = error.response.data;
            message.error(res.message || '未知错误' + res.status);
        } else {
            message.error(error.message || '未知错误');
        }

        return Promise.reject(error);
    }
);
export {axios};

