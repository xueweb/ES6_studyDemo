var someArray = [1,2];
var [first,second,third] = someArray;
console.log(second,third);

// 对象的解构
var robotA = {name:"Bender"};
var robotB = {name:"Flexo"};

var {name:nameA} = robotA;
var {name:nameB} = robotB;
console.log(nameA);
console.log(nameB);
/**
 * 当属性名与变量名一致时，可以通过一种实用的语法简写
 */
var {foo,bar} = {foo:"lorem",bar:"ipsum"};
console.log(foo);
console.log(bar);

var complicateObj = {
    arrayProp:[
        "zapp",
        {second:"Brannigan"}
    ]
};

var {arrayProp:[first,{second}]} = complicateObj;
console.log(first)
console.log(second)
// 与ES6迭代器协议协同使用
var map = new Map();
map.set('a',"the global");
map.set('b',"the document");

for(var [key,value] of map){
    console.log(key + "is"+value);
}
// 多重返回值

// function returnMultipleValues(){
//     return [1,2]
// }
// var [foo,bar] = returnMultipleValues();
// console.log(foo);
// console.log(bar);

function returnMultipleValues() {
    return {
      foo: 1,
      bar: 2
    };
  }
  var { foo, bar } = returnMultipleValues();