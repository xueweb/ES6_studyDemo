/**
 * Created by Administrator on 2017/6/29 0029.
 */
var log = require('../log');
var sleep = function (time) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve();
        },time)
    })
};
var start = async function () {
    log('start');
    await sleep(3000);
    console.log('end');
}
start();

//获取返回值

/*var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 返回 ‘ok’
            resolve('ok');
        }, time);
    })
};

var start = async function () {
    let result = await sleep(3000);
    console.log(result); // 收到 ‘ok’
};
start();*/


