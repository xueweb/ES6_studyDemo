/**
 * Created by Administrator on 2017/6/23 0023.
 */
const log = require('../log');
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return 'x:' + this.x + ',y:' + this.y;
    }
}
//使用super继承方法
class ColorPoint extends Point{
    constructor(x,y,color){
        super(x,y);
        this.color=color;
    }
    toString(){
        return this.color + ' '+super.toString();
    }
}
var point = new Point(9,0);
log(point.toString());
var color = new ColorPoint(1,2,'green');
log(color.toString());

