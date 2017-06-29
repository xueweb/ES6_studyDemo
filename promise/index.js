/**
 * Created by Administrator on 2017/6/29 0029.
 */

/*
 *所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异
 *步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
 * Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
 * */
var log = require('../log');
let promise = new Promise(function (resolve, reject) {
    log('promise');
    resolve();
})
promise.then(() => {
    log('resolved.');
})
log('hi');


//1.基本用法
/*
 var promise = new Promise(function(resolve, reject) {
 // ... some code

 if (/!* 异步操作成功 *!/){
 resolve(value);
 } else {
 reject(error);
 }
 });*/

/*function timeout(ms) {
    return new Promise((resolve, reject) => {
        "use strict";
        setTimeout(resolve, ms, 'done');
    })
}
timeout(100).then((value) => {
    "use strict";
    log(value)
});*/

/*var getJSON = function (url) {
 var promise = new Promise(function (resolve,reject) {
 var client = new XMLHttpRequest();
 client.open("GET",url);
 client.onreadystatechange=handler;
 client.responseType="json";
 client.setRequestHeader('Accept','application/json');
 client.send();

 function handler() {
 if(this.readyState !==4){
 return;
 }
 if(this.status===200){
 resolve(this.response);
 }else{
 reject(new Error(this.statusText));
 }
 }
 })
 return promise;
 }
 getJSON("/posts.json").then(function(json) {
 console.log('Contents: ' + json);
 }, function(error) {
 console.error('出错了', error);
 });*/

function printHello(ready) {
    "use strict";
    return new Promise(function (resolve, reject) {
        if (ready) {
            resolve('hello');
        } else {
            reject('Good bye!');
        }
    });
}
function printWorld() {
    log('world')
}
function printEx() {
    log("!");
}
printHello(true).then(function (message) {
    log(message)
}).then(printWorld).then(printEx)