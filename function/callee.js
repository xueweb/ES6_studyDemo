/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/12
 * Time: 9:05
 */
/**
 * callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。
 */
// 警告：在严格模式下，第5版 ECMAScript (ES5) 禁止使用 arguments.callee()。
// 当一个函数必须调用自身的时候, 避免使用 arguments.callee(),
//     通过要么给函数表达式一个名字,要么使用一个函数声明.
function testCaller(){
    if(testCaller.caller){
        var a =testCaller.caller.toString();
        console.log(a)
    }else{
        console.log('a function');
    }
}
// testCaller();
function callerDemo() {
    testCaller()
}
callerDemo()

//为什么 arguments.callee 从ES5严格模式中删除了？
/**
 * 原因：
 早期版本的 JavaScript不允许使用命名函数表达式，出于这样的原因, 你不能创建一个递归函数表达式。
 */
function factorial (n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
}

[1,2,3,4,5].map(factorial);

/**
 *
 * @type {Array}
 * 这个函数在早期版本的 JavaScript不允许使用命名函数表达式
 */
var aa=[1,2,3,4,5].map(function (n) {
    return !(n > 1) ? 1 : /* what goes here? */ (n - 1) * n;
});
[1,2,3,4,5].map(function (n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
console.log(aa)