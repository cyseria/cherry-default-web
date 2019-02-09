/**
 * @file 调试用的模拟数据
 * @author 陈蔓青（chenmanqing@baidu.com）
 */

import {API} from './api';
import Mock from 'mockjs';
const Random = Mock.Random;

Mock.mock(API.project, 'get', {
    count: 10,
    'rows|1-10': {
        'id|+1': 1,
        name: Random.ctitle(3, 10),
        description: Random.cparagraph(),
        author: Random.first(),
        cover: Random.image('200x100'),
        url: Random.url(),
        tags: getTags()
    }
});

Mock.mock(API.project, 'post', {
    message: {
        id: 1,
        name: Random.ctitle(3, 10),
        description: Random.cparagraph(),
        author: Random.first(),
        cover: Random.image('200x100'),
        url: Random.url(),
        'tags|1-10': [Random.word(3, 8)]
    }
});

function getTags() {
    const randomNumber = Math.floor(Math.random() * 8 + 3);
    return new Array(randomNumber).fill(0).map(item => {
        return Random.word(3, 8);
    });
}