/**
 * @file 接口路径
 * @author Cyseria <xcyseria@gmail.com>
 */

/* this is your server basepath, need override when in prod env */
const baseUrl = '/api';

export const API = {
    project: `${baseUrl}/projects`,
    // getSimpleList: `${baseUrl}/simple-list`, // 获取简单的列表信息,只包含名称的数组, like ['vue-vuex', 'react-mobx', 'riot-simple']
    // getList: `${baseUrl}/`, // 获取列表的所有信息, param 可选
    // publish: `${baseUrl}/publish`
};
