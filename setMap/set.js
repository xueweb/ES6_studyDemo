/**
 * Created by Administrator on 2017/6/21 0021.
 */
var log=require('../log');
const s=new Set();
[1,2,3,4,5,5,5,2,2,9].forEach(x=>s.add(x));
for(var i of s){
    log(i);
}
var unique=(arr)=>[...new Set(arr)];
var arr=[1,1,1,22,3,3]
log(unique(arr))
