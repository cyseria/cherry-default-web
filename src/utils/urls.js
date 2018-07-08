/**
 * 获取url参数值
 * @param {string} name 必填，需要获取的参数名
 * @param {string} url 需要获取参数的url，如为空则使用 location.search
 * @return {string} 返回获取的参数名
 */
export function getUrlParam(name, url) {
    if (!name) {
        return '';
    }
    url = url || window.location.search;
    name = name.replace(/(?=[\\^$*+?.():|{}])/, '\\');
    const reg = new RegExp('(?:[?&]|^)' + name + '=([^?&#]*)', 'i');
    const match = url.match(reg);
    return !match ? '' : match[1];
}