/**
 * Created by Administrator on 2017/6/21 0021.
 */
/**
 *  Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
 * Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。
 * 
 */
var log = require('../log');
const s = new Set();
[1, 2, 3, 4, 5, 5, 5, 2, 2, 9].forEach(x => s.add(x));
for (var i of s) {
    log(i);
}
var unique = (arr) => [...new Set(arr)];
var arr = [1, 1, 1, 22, 3, 3]
log(unique(arr))

function unique1(array) {
    var res = [];
    for (var i = 0, arrLen = array.length; i < arrLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}
var uni1 = unique1(arr);
console.log(uni1)

function unique2(array) {
    var res=[];
    for(var i=0,arrlen=array.length;i<arrlen;i++){
        if(res.indexOf(array[i]) === -1){
            res.push(array[i])
        }
    }
    return res;
}

log(unique2(arr));
console.log('#######');
let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text"); // Set(3) {1, 5, "some text"}
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o 指向的是不同的对象，所以没问题
mySet.add({a: 1, b: 2});
console.log(mySet)

for (let item of mySet.keys()) console.log(item);
for (let item of mySet.values()) console.log(item);

for (let [key, value] of mySet.entries()) console.log(key);