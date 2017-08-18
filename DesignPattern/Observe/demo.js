/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/18
 * Time: 11:11
 */
var Event ={
    clientList:[],
    listen:function (key,fn) {
        if(!this.clientList[key]){
            this.clientList[key]=[]
        }
        this.clientList[key].push(fn);
    },
    trigger:function () {
        var key =Array.prototype.shift.call(arguments),
            fns=this.clientList[key];
        if(!fns || fns.length===0){
            return false;
        }
        for(var i =0,fn;fn=fns[i++];){
            fn.apply(this,arguments);
        }
    },
    remove:function (key,fn) {
        var fns = this.clientList[key];
        if(!fns){
            return false;
        }
        if(!fn){
            fns &&(fns.length=0);
        }else{
            for(var l=fns.length-1;l>=0;l--){
                var _fn=fns[l];
                if(_fn==fn){
                    fns.slice(1,1);
                }
            }
        }
    }
}
var installEvent  =function (obj) {
    for(var i in Event){
        obj[i] =Event[i];
    }
}
var observers={},fn1,fn2;
installEvent(observers);
observers.listen('sm88',fn1=function (price) {
    console.log('sm88='+price)
})

observers.listen('sm100',fn2=function (price) {
    console.log('sm100='+price)
})
observers.remove('sm88',fn1)
observers.trigger('sm88',80000)
observers.trigger('sm100',10000)