/**
 * Created by Administrator on 2017/6/23 0023.
 */
const log = require('../log');
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return 'x:' + this.x + ',y:' + this.y;
    }
}
//使用super继承方法
/*
 * 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。
 * */
class ColorPoint extends Point {
    constructor(x, y, color) {
        //this.color=color; ReferenceError
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString();
    }
}
var point = new Point(9, 0);
log(point.toString());
var color = new ColorPoint(1, 2, 'green');
log(color.toString());

// Object.getPrototypeOf()
//Object.getPrototypeOf方法可以用来从子类上获取父类。
log(Object.getPrototypeOf(ColorPoint) === Point)

//super关键字
/*
 * 第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
 * */
class A {
    constructor() {
        console.log('new target:' + new.target.name);
    }
}
class B extends A {
    constructor() {
        super();
    }
}
log(new A()) // A
log(new B()) // B


/*
 * 由于绑定子类的this，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。
 * */
/*
 *
 * class A {
 constructor() {
 this.x = 1;
 }
 }

 class B extends A {
 constructor() {
 super();
 this.x = 2;
 super.x = 3;
 console.log(super.x); // undefined
 console.log(this.x); // 3
 }
 }

 let b = new B();
 * */

class Parent {
    static myMethod(msg) {
        log('static', msg)
    }

    myMethod(msg) {
        log('instance', msg)
    }
}

class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);
    }

    myMethod(msg) {
        super.myMethod(msg);
    }
}
Child.myMethod('hello');
var child = new Child();
child.myMethod('hello');

function fparent(x, y) {
    this.x = x;
    this.y = y;
    log(this.x)
}
fparent.prototype.sayHello = function () {
    log(this.y, 'hello');
}

function fchild(x, y) {
    fparent.prototype.constructor.call(this, x, y);
}
/*fchild(1,2).sayHello();*/
var cc = fchild(1, 2);

//原生构造函数的继承
/*
 * 原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript 的原生构造函数大致有下面这些。
 * */
function MyArray() {
    Array.apply(this, arguments)
}
MyArray.prototype = Object.create(Array.prototype, {
    constructor: {
        value: MyArray,
        writable: true,
        configurable: true,
        enumerable: true
    }
})
var colors = new MyArray();
colors[0] = "red";
colors.length  // 0

colors.length = 0;
colors[0]  // "red"

//Mixin 模式的实现
function mix(...mixins) {
    class mix {
    }

    for (let mixin of mixins) {

    }
}

function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== "constructor"
            && key !== "prototype"
            && key !== "name"
        ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}
//上面代码的mix函数，可以将多个对象合成为一个类。使用的时候，只要继承这个类即可。
/*
 class DistributedEdit extends mix(Loggable, Serializable) {
 // ...
 }*/
