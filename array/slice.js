/**
 * Created by 29912 on 2017/9/6.
 */
/*
* slice()
* */

var a=['a','b','c','d','e'];

var slice = a.slice(1,3);
console.log(slice)
console.log(a.slice(1));
console.log(a.slice(1,1));
console.log(a.slice(3,-1))
console.log(a.slice(-2))

function argArgument(a,b) {
    var sliceArg = Array.prototype.slice.call(arguments,1);
    console.log(sliceArg);

}
argArgument('a','b','c')