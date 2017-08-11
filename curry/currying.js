/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/11
 * Time: 8:51
 */

// function curry(fn) {
//     return function curried() {
//         var args = [].slice.call(arguments);
//         return args.length >=fn.length?
//             fn.apply(null,args):
//             function () {
//                 var rest = [].slice.call(arguments);
//                 return curried.apply(null,args.concat(rest));
//             }
//     }
// }


//第一版

/**
 * @param fn
 * @returns {Function}
 */
var curry1=function (fn) {
    var args = [].slice.call(arguments,1);
    return function(){
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this,newArgs);
    }
}
function add(a,b) {
    return a+b;
}
var addCurry = curry1(add,1,2);
console.log(addCurry());
// var addCurry = curry(add, 1);
// addCurry(2) // 3

//第二版

function sub_curry(fn) {
    var args=[].slice.call(arguments,1);
    return function () {
        return fn.apply(this,args.concat([].slice.call(arguments)));
    }
}
function curry2(fn,length) {
    length = length || fn.length;
    var slice = Array.prototype.slice;
    return function () {
        if(arguments.length < length){
            var combined = [fn].concat(slice.call(arguments));
            return curry2(sub_curry.apply(this,combined),length - arguments.length);
        }else{
            return fn.apply(this,arguments);
        }
    }
}
var fn1=curry2(function (a,b,c) {
    return[a,b,c];
})
console.log(fn1("a","b","c"));
console.log(fn1("a")("b"));

