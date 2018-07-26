 'use strict'
// 相关： async函数
//      generator函数



// function test(){
//     return new Promise((resolve,reject)=>{
//         setImmediate(()=>{
//             console.log(2);
//         })
//         resolve();
//     });
// }
// test().
//   then(()=>{
//     console.log(1);
// });
// 输出顺序：1 2

// PROMISE                 RACE
//   const clock = (time)=>{
//       return new Promise(
//         (resolve,reject)=>{
//           setTimeout(()=>{
//             resolve('time out');
//           },time)
//         }
//       )
//   } 
//   const issue = (time)=>{
//     return new Promise(
//         (resolve,reject)=>{
//           setTimeout(()=>{
//               resolve('done');
//           },time)
//         }
//       )
//   }
//   Promise.race([issue(1),clock(2000)])
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((error=>{
//         console.log(error);
//     }));

// Promise.resolve().then(f).then((value) => {
//     console.log(value);
// });
// console.log('later');
// function f(){
//     console.log('earier');
//     var msg = 'hello';
//     return msg;
// }

//Promise实现ajax
// const getJSON = function(url) {
//     const promise = new Promise(function(resolve, reject){
//       const handler = function() {
//         if (this.readyState !== 4) {
//           return;
//         }
//         if (this.status === 200) {
//           resolve(this.response);
//         } else {
//           reject(new Error(this.statusText));
//         }
//       };
//       const client = new XMLHttpRequest();
//       client.open("GET", url);
//       client.onreadystatechange = handler;
//       client.responseType = "json";
//       client.setRequestHeader("Accept", "application/json");
//       client.send();
  
//     });
  
//     return promise;
//   };
  
//   getJSON("/posts.json").then(function(json) {
//     console.log('Contents: ' + json);
//   }, function(error) {
//     console.error('出错了', error);
//   });



//yield+Promise对象

// var attack = (n) => {
//     return new Promise((resolve,reject) => {
//         console.log(n);
//         resolve(n);
//     })
// }
// function* yp(){
//     yield attack('1');
//     yield attack('2');
// }
// var av = yp();
// av.next().value.then((value)=>{
//     av.next(value).value.then((value)=>{
//         console.log('value:::'+value);
//     })
// })

//Generator与Promise结合的写法
// function getFoo () {
//     return new Promise(function (resolve, reject){
//       resolve('foo');
//     });
//   }
  
//   const g = function* () {
//     try {
//       const foo = yield getFoo();
//       console.log(foo);
//     } catch (e) {
//       console.log(e);
//     }
//   };
  
//   function run (generator) {
//     const it = generator();
  
//     function go(result) {
//       if (result.done) return result.value;
  
//       return result.value.then(function (value) {
//         return go(it.next(value));
//       }, function (error) {
//         return go(it.throw(error));
//       });
//     }
  
//     go(it.next());
//   }
  
//   run(g);





//深入理解以后可以找co源码看
//对Trunk函数结构理解不够