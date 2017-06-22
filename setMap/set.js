/**
 * Created by Administrator on 2017/6/21 0021.
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

log(unique2(arr))