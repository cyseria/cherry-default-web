/**
 * @file
 * @author Cyseria <xcyseria@gmail.com>
 * @created time: 2018-06-13 10:45:51
 * @last modified by: Cyseria
 * @last modified time: 2018-06-13 10:50:12
 */

import baseUrl from './config';

export default {
    getSimpleList: `${baseUrl}/simple-list`, // 获取简单的列表信息,只包含名称的数组, like ['vue-vuex', 'react-mobx', 'riot-simple']
    getList: `${baseUrl}/`, // 获取列表的所有信息, param 可选
    publish: `${baseUrl}/publish`
};
