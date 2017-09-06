/**
 * Created by 29912 on 2017/8/21.
 */
/*
* 简易星星评级
* */
var rate=3;
"★★★★★☆☆☆☆☆".slice(5-rate,10-rate);//输出"★★★☆☆"


//将arguments对象转化成数组
function getArgument() {
    //[].slice()返回一个从开始到结束（不包过结束）选择的数组的一部分浅拷贝到一个新数组对象。原始数组不会被修改
    var argArray = Array.prototype.slice.call(arguments);
}
