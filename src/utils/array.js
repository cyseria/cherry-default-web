/**
 * @file array
 * @author Cyseria <xcyseria@gmail.com>
 */

// 数组 b 是否在 数组 a 中
export function isArrayContained(a, b) {
    if (!(a instanceof Array) || !(b instanceof Array)) {
        return false;
    }
    if (b.length === 0) {
        return a;
    }
    if (a.length < b.length) {
        return false;
    }

    const aStr = a.toString();
    for (let i = 0, len = b.length; i < len; i++) {
        const bi = b[i].replace(/^\s+|\s+$/g, '');
        if (aStr.indexOf(bi) === -1) {
            return false;
        }
    }
    return true;
}
