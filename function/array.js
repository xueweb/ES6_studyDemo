/**
 * Created by Administrator on 2017/6/21 0021.
 */
var log = require('../log');

/*
* 由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。
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