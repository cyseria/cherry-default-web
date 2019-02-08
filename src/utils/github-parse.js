/**
 * @file
 * @author Cyseria
 */

import parse from 'url-parse';

const GITHUBCOM = 'github.com';

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

    if (res.host !== GITHUBCOM) {
        return null;
    }

    const paths = res.pathname.split('/').filter(Boolean);
    const result = {};

    const keys = ['owner', 'name', 'type', 'branch'];

    paths.forEach((item, index) => {
        const k = keys[index];
        if (k) {
            result[k] = item;
        }
    });

    if (!result.branch) {
        result.branch = 'master';
    }
    result.url = `https://${GITHUBCOM}/${result.owner}/${result.name}.git`;
    return result;
}
