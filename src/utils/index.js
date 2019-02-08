/**
 * @file
 * @author Cyseria
 */

export function getTagsList(galleryList) {
    if (isEmptyArray(galleryList)) {
        return [];
    }
    const tagsSet = new Set();
    galleryList.forEach(item => {
        if (isEmptyArray(item.tags)) {
            return;
        }
        item.tags.forEach(item => {
            tagsSet.add(item);
        });
    });
    return [...tagsSet];
}

export function isEmptyArray(arr) {
    return !Array.isArray(arr) || arr.length <= 0;
}
