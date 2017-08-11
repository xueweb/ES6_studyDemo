/**
 * Created by 29912 on 2017/8/11.
//  */
// function curry(fn,scope) {
//     var scope = scope ||window;
//     var args =[];
//     for(var i=2,len =arguments.length;i<len;i++){
//         args.push(arguments[i]);
//     }
//     return function () {
//         fn.apply(scope,args);
//     }
// }

// function add(a,b) {
//     return a+b;
// }
// function sum(){
//     var result=0;
//     for(var i=0, n=arguments.length; i<n; i++){
//         result += arguments[i];
//     }
//     return result;
// };
// var curry= function(fn){//原函数的参数为函数
//     return function(args){//内部函数的参数为数组，由于立即执行，因此直接到第三重去
//         //args是相对于第三重内部函数可是全局变量
//         var self= arguments.callee;//把自身保存起来（就是那个数组为参数的第二重函数）
//         return function(){ //这才是第二次调用的函数
//             if(arguments.length){//如果还有要添加的参数
//                 [].push.apply(args,arguments);//apply把当前传入的所有参数放进args中
//                 return self(args);
//             }else{
//                 return fn.apply(this,args);//apply的第二参数为数组
//             }
//         }
//     }([]);
// };
// var sum2= curry(sum);
// sum2= sum2(1,2,3);
// console.log(sum2)