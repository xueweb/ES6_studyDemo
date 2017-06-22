/**
 * Created by Administrator on 2017/6/21 0021.
 */
var log = require('../log');

/*
* 由于扩展运算符...可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。
* */
/*function Max(args) {
    if(!Array.isArray(args)){
        throw Error('参数必须是数组');
        return;
    }
    return Math.max(...args)
}
log(Max([1,2,3,4,5]))
log(Max('1,2,3'))*/

/*扩展运算符可以与结构函数结合起来，用于生成数组。*/
var arr1=['a','b'];
var arr2=['c'];
var arr3=['d','e'];
var concatarr=[...arr1,...arr2,...arr3];
log(concatarr);
/*
* 注：
* 扩展运算符可以与解构赋值结合起来，用于生成数组。
* 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
* const [...butLast, last] = [1, 2, 3, 4, 5];
 // 报错

 const [first, ...middle, last] = [1, 2, 3, 4, 5];
 // 报错
* */
/*
* const [first, ...rest] = [1, 2, 3, 4, 5];
 first // 1
 rest  // [2, 3, 4, 5]
* */