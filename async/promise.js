
// var promise = new Promise(function(resolve, reject) {
//     console.log('before resolved');
//     resolve();
//     console.log('after resolved');
//   });
  
//   promise.then(function() {
//     console.log('resolved');
//   });
//   promise.then(function(){
//       console.log('resolved2')
//   })
//   console.log('outer');
// console.log('######')
//   var pro = new Promise(function(resove,reject){
//       resove();
//       throw 'error';
//   })
//   pro.catch(function(e){
//       console.log(e)
//   })

//   let promise2 = new Promise(function(resolve,reject){
//       console.log('promise2')
//       resolve();
//       reject();
//   })
//   promise2.then(function(){
//       console.log('promise2 resolve')
//   }).catch(function(e){
//       console.log(e)
//   });
/*let promise = new Promise(function(resolve,reject){
    resolve(x);
});
promise.then(function(data){
    console.log(data)
})*/