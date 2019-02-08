/**
 * @file 调试用的模拟数据
 * @author 陈蔓青（chenmanqing@baidu.com）
 */

import {API} from './api';
import Mock from 'mockjs';

Mock.mock(API.getList, 'get', {
    'list|1-10': [
        {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            name: '',
            description: '',
            author: '',
            cover: '',
            repoUrl: '',
            tags: []
        }
    ]
});

Mock.mock(API.contribute, 'post', {
    name: '',
    description: '',
    author: '',
    cover: '',
    url: '',
    tags: []
});
