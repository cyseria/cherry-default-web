/**
 * @file 接口访问的处理信息
 * @author 陈蔓青（chenmanqing@baidu.com）
 */
import {API} from './api';
import {axios} from '../utils/request';

export const getList = values => axios.post(API.getList, values);
