let slice = require('../array/slice');

// 返回数组中的最大值 最小值
const arrayMax = arr => Math.max(...arr);
const arrayMin = arr => Math.min(...arr);

const chunk = (arr, size) =>
    Array.from({
        length: Math.ceil(arr.length / size)
    }, (v, i) => arr.slice(i * size, i * size + size));
// chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
let arr = chunk([1, 2, 3, 4, 5, 6, 7], 2)
console.log(arr);

function es5Chunk(array, size) {
    size = Math.max(size, 0);
    const length = array === null ? 0 : array.length
    if (!length || size < 1) {
        return []
    }
    let index = 0;
    let resIndex = 0;
    const result = new Array(Math.ceil(length / size));

    while (index < length) {
        result[resIndex++] = slice(array,index, (index += size));
    }
    return result;
}
let a = es5Chunk([1, 2, 3, 4, 5,6], 2);
console.log(a);