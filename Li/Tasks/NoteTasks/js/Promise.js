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
