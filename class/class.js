/**
 * Created by Administrator on 2017/6/22 0022.
 */
const log=require('../log')
class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return 'x:'+this.x+',y:'+this.y;
    }
}

var p =new Point(1,2);
log(p.toString())
log(Point ===Point.prototype.constructor)

/*
* 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。
* */
Object.assign(Point.prototype,{
    toValue(){
        log('value')
    },
    say(){
        log('say')
    }
})

p.toValue();
log(p.toString())
p.say();
log(Object.getOwnPropertyNames(Point.prototype))

class Person{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
}
var person = new Person('zhu','mial');
person.setName('dazhu')
log(person.getName())

//采用 Class 表达式，可以写出立即执行的 Class。
let animal=new class{
    constructor(name,weight){
        this.name=name;
        this.weight=weight;
    }
    setWeight(weight){
        this.weight=weight;
    }
    getWeight(){
        return this.weight;
    }
}('pig','1000')
log(animal.getWeight())
//私有方法
/*
方法1
* */
class Widget{
        foo(baz){
            bar.call(this,baz)
        }
}
function bar(baz) {
    return this.snaf=baz;
}

//方法2
/*
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

    // 公有方法
    foo(baz) {
        this[bar](baz);
    }

    // 私有方法
    [bar](baz) {
        return this[snaf] = baz;
    }

    // ...
};*/
