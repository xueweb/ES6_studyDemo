/**
 * Created by Administrator on 2017/7/12 0012.
 */
var arr = [{old: 'old'}, ['old']];

var new_arr = arr.concat();

arr[0].old = 'new';
arr[1][0] = 'new';

console.log(arr) // [{old: 'new'}, ['new']]
console.log(new_arr) // [{old: 'new'}, ['new']]
var shallowCopy = function (obj) {
    if(typeof obj !== 'object') return;

    var  newObj= obj instanceof Array ? []:{};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
var testArr=[1,2,3,{a:'aa'}];
var o=shallowCopy(testArr);
testArr[2]=22222;
console.log(o);
console.log(testArr)

var deepCopy =function (obj) {
    if(typeof obj !=='object') return;
    var newObj = obj instanceof Array ?[]:{};

    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}

