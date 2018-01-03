/**
 * Array.form() 从一个类似数组或可迭代对象中创建一个新的数组实例。
 *Array.from(arrayLike, mapFn, thisArg)
 */

const bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]

Array.from('foo');
// ["f", "o", "o"]
