/**
 * @file 接口访问的处理信息
 * @author 陈蔓青（chenmanqing@baidu.com）
 */
import {API} from './api';
import {axios} from './request';
import './mock';

export const createProject = values => axios.post(API.project, values);
export const getProjectList = values => axios.get(API.project, values);

// export const updateProject = values => axios.put(url, {
//     params: {
//         id:paramId
//     }
// })
export const deleteProject = id =>
    axios.delete(API.project, {
        params: {
            id
        }
    });
