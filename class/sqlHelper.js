/**
 * Created by Administrator on 2017/6/30 0030.
 */
class sqlHelper{
    constructor(opt){
        this.x=opt.x;
        this.y=opt.y;
        this.toString=toString;
    }
    say(){
        console.log(this.toString);
    }
}

function toString(str) {
    return 'string:'+str;
}

let sqlhelper=new sqlHelper({x:'1',y:'2'})
var str=sqlhelper.toString('hi');
console.log(str);