/**
 * @file 判断数组
 * @author Cyseria <xcyseria@gmail.com>
 * @created time: 2018-06-13 11:13:21
 * @last modified by: Cyseria
 * @last modified time: 2018-06-13 13:45:49
 */

// 数组 b 是否在 数组 a 中
function isArrayContained(a, b) {
    if (!(a instanceof Array) || !(b instanceof Array)) {
        return false;
    }
    if (b.length === 0) {
        return false;
    };
    if (a.length < b.length) {
        return false;
    };
    
    const aStr = a.toString();
    for (let i = 0, len = b.length; i < len; i++) {
        const bi = b[i].replace(/^\s+|\s+$/g,"");
        if (aStr.indexOf(bi) === -1) {
            return false;
        }
    };
    return true;
}
export {isArrayContained};