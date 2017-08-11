/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/11
 * Time: 10:24
 */

[1,2,3,4,5].reduce(function (accumlator,currentValue,currentIndex,arry) {
    console.log(accumlator,currentValue,currentIndex,arry);
})

var total =[0,1,2,3].reduce((sum,value)=>sum+value);
console.log(total);
var flattened = [[0, 1], [2, 3], [4, 5,6]].reduce(function(a, b) {
    return a.concat(b);
},[]);
console.log(flattened);
//计算数组中每个元素出现的次数
console.log('计算数组中每个元素出现的次数')
var names =['Alice','Bob','Tiff','B','B','Alice'];

//方法1
// var result={};
// names.map((i,j)=>{
//     var count=0;
//     for(var isName of names){
//         if(i == isName){
//             result[i]=++count;
//         }
//     }
// })
function aitemCount(arr) {
    var result={};
    arr.map((i,j)=>{
        var count=0;
        for(var isName of names){
            if(i == isName){
                result[i]=++count;
            }
        }
    })
    return result
}
// console.log(result);
//2.reduce版
function reducCountArray(arr) {
    var countedNames = arr.reduce(function (allNames,name) {
        if(name in allNames){
            allNames[name]++
        }else{
            allNames[name]=1;
        }
        return allNames
    },{})
    return countedNames;
}
var rarr=['a','a','b','c'];
console.log(reducCountArray(rarr))

//es5实现
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
    Object.defineProperty(Array.prototype, 'reduce', {
        value: function(callback /*, initialValue*/) {
            if (this === null) {
                throw new TypeError( 'Array.prototype.reduce ' +
                    'called on null or undefined' );
            }
            if (typeof callback !== 'function') {
                throw new TypeError( callback +
                    ' is not a function');
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // Steps 3, 4, 5, 6, 7
            var k = 0;
            var value;

            if (arguments.length >= 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in o)) {
                    k++;
                }

                // 3. If len is 0 and initialValue is not present,
                //    throw a TypeError exception.
                if (k >= len) {
                    throw new TypeError( 'Reduce of empty array ' +
                        'with no initial value' );
                }
                value = o[k++];
            }

            // 8. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kPresent be ? HasProperty(O, Pk).
                // c. If kPresent is true, then
                //    i.  Let kValue be ? Get(O, Pk).
                //    ii. Let accumulator be ? Call(
                //          callbackfn, undefined,
                //          « accumulator, kValue, k, O »).
                if (k in o) {
                    value = callback(value, o[k], k, o);
                }

                // d. Increase k by 1.
                k++;
            }

            // 9. Return accumulator.
            return value;
        }
    });
}