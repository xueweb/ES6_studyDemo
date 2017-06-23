/**
 * Created by Administrator on 2017/6/22 0022.
 */
const log = require('../log')
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return 'x:' + this.x + ',y:' + this.y;
    }
}

var p = new Point(1, 2);
log(p.toString())
log(Point === Point.prototype.constructor)

/*
 * 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。
 * */
Object.assign(Point.prototype, {
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

class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
var person = new Person('zhu', 'mial');
person.setName('dazhu')
log(person.getName())

//采用 Class 表达式，可以写出立即执行的 Class。
let animal = new class {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }
}('pig', '1000')
log(animal.getWeight())
//私有方法
/*
 方法1
 * */
class Widget {
    foo(baz) {
        bar.call(this, baz)
    }
}
function bar(baz) {
    return this.snaf = baz;
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

// Class 的取值函数（getter）和存值函数（setter）

class MyClass {
    constructor() {

    }

    get prop() {
        return 'getter';
    }

    set prop(value) {
        log('seeter:' + value);
    }
}
var inst = new MyClass();
inst.prop = 123;
log(inst.prop);


class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHeight;
    }

    set html(varlue) {
        this.element.innerHTML = varlue;
    }
}
var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, "html"
)

log('get' in descriptor);
log('set' in descriptor);

//class的静态方法
class staClass {
    static staMethod() {
        log('static method');
    }
}
staClass.staMethod();
/*
 var sta = new staClass();
 sta.staMethod*/
/*
 * 父类的静态方法，可以被子类继承。
 * */

/*
 class Foo {
 static classMethod() {
 return 'hello';
 }
 }

 class Bar extends Foo {
 }

 Bar.classMethod() // 'hello'*/

//静态方法也是可以从super对象上调用的
class Foo {
    static classMethod() {
        return 'hello';
    }
}
//静态属性
Foo.prop = 1
class Bar extends Foo {
    static classMethod() {
        return super.classMethod() + ',too';
    }
}
log(Bar.classMethod());
log(typeof Bar);

class myClass {

    constructor() {
        this.myStaticProp = 42;
        log(this.myStaticProp)
    }
}
var mc = new myClass();

//new.target属性
function pperson(name) {
    if (new.target !== undefined) {
        this.name = name;
    } else {
        throw new Error('必须使用new生成实例');
    }
}
var pe = new pperson('zhu');
log(pe.name)
