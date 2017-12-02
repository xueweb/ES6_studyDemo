/**
 * async函数返回一个 Promise 对象，
 * 可以使用then方法添加回调函数。当函数执行的时候，
 * 一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
 */

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function asyncPrint(value, ms) {
    await timeout(ms); //等待timeout执行完毕才会向下继续执行 。await返回的是Promise函数
    console.log(value);
}
asyncPrint('hello async', 1000);