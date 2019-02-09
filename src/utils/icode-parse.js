/**
 * @file
 * @author Cyseria
 */

import parse from 'url-parse';

const ICODE = 'icode.baidu.com';

/**
 * parse github url
 * @param {string} url - github 链接
 * @return {Object} - 解析后的对象
 * ssh 什么的还有各种校验以后有空再支持, 还有不同分支... 😐
 *
 * @example
 * {
 *   "owner": "cyseria",
 *   "name": "cherry-ui",
 *   "type": "blob",
 *   "branch": "master"
 * }
 */
export function githubUrlParse(url) {
    const res = parse(url, true);

    if (res.host !== ICODE) {
        return null;
    }

    // http://icode.baidu.com/repos/baidu/hi-fe/cherry-ui/tree/dev/v2
    const paths = res.pathname.split('/').filter(Boolean);
    const result = {};
    result.name = paths[3];
    // todo: use uuap to get owner
    // result.url = `https://${ICODE}/repos/baidu/${result.name}`;
    return result;
}
