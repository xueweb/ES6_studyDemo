/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/18
 * Time: 10:25
 */
/**
 *
 * 如何一步步实现发布—订阅模式
   首先要指定好谁充当发布者（比如售楼处）
   然后给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者（售楼处的花名册）
   最后发布消息的时候，发布者会遍历这个缓存列表，今次触发里面存放的订阅者回调函数（遍历花名册，挨个发短信）
 * */

/*var salesOffice ={};
salesOffice.clientList=[];
salesOffice.listen=function (fn) {
    this.clientList.push(fn);
}
salesOffice.trigger=function () {
    for(var i=0,fn;fn=this.clientList[i++];){
        fn.apply(this,arguments)
    }
}

salesOffice.listen(function (price,squareMeter) {
    console.log('price='+price);
    console.log('squareMeter='+squareMeter)
});
salesOffice.listen(function (price,squareMeter) {
    console.log('price='+price);
    console.log('squareMeter='+squareMeter)
});
salesOffice.trigger(20000,100);
salesOffice.trigger(10000,100);*/

var salesOffice ={};
salesOffice.clientList=[];

//根据key来发布事件，触发事件
salesOffice.listen=function (key,fn) {
    if(!this.clientList[key]){
        this.clientList[key]=[];
    }
    this.clientList[key].push(fn);
}
salesOffice.trigger=function () {

    var key = Array.prototype.shift.call(arguments),
        fns=this.clientList[key];
    if(!fns || fns.length===0){
        return false;
    }
    for(var i=0,fn;fn=fns[i++];){
        fn.apply(this,arguments)
    }
}

salesOffice.listen('squareMeter88',function (price) {
    console.log('squareMeter88:'+price)
})
salesOffice.listen('squareMeter100',function (price) {
    console.log('squareMeter100:'+price)
})
salesOffice.trigger('squareMeter88',20000)
salesOffice.trigger('squareMeter100',20000)