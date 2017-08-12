/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/12
 * Time: 9:38
 */

//传统函数参数赋默认值
function defaultParam(a,b){
    a=typeof  a!=='undefined' ? a :1;
    b=typeof b!=='undefined' ? b: 1;
    return a*b;
}
console.log(defaultParam(3));
//默认函数参数允许使用默认值初始化形式参数，如果没有值或未定义被传入
function parameter1(a=1,b=2) {
    return a+b;
}
console.log(parameter1(5));

/**
 * 即使函数默认参数传入undefined也会使用默认值
 **/
function setBackgroundColor(element, color = 'rosybrown') {
    element.style.backgroundColor = color;
}

setBackgroundColor(someDiv);            // color的值为'rosybrown'
setBackgroundColor(someDiv, undefined); // color的值为'rosybrown'
setBackgroundColor(someDiv, 'blue');    // color的值为'blue'

