//Generator  状态机 返回 状态遍历指针
//其真正意义在于提供了js内部的惰性求值机制
// var test = function* (){
//     yield console.log('step 1');
//     yield console.log('step 2');
//     yield console.log('step 3');
//     return ending;
// }
// var v = test();
// v.next();
// v.next();
// v.next();

// var yi = function* (){
//     console.log('step 1');
//     console.log('step 2');
//     console.log('step 3');
// }
// var s = yi();
// s.next();
// s.next();

//to make an object iterable , using Generator function
// function* demo() {
    //console.log('Hello' + yield); // SyntaxError
    //console.log('Hello' + yield 123); // SyntaxError
  
    // console.log('Hello' + (yield)); // OK
    // console.log('Hello' + (yield 123)); // OK
    // let y = yield;
    // console.log(y);
// }

//  var d = demo();
// d.next();
// d.next('1');
// d.next('2');
// d.next('3');
// for (const i of d) {
    // console.log(i);
// }

//斐波那契数列 这个实例说明 用for of遍历时 不需next()
// function* fibonacci() {
//     let [prev, curr] = [0, 1];
//     for (;;) {
//       yield curr;
//       [prev, curr] = [curr, prev + curr];
//     }
//   }
  
//   for (let n of fibonacci()) {
//     if (n > 1000) break;
//     console.log(n);
//   }


//某些不具备iterator性的原生对象可以强行加上接口用来遍历
// let jane = { first: 'Jane', last: 'Doe' };
// for (const i of jane) {
//     console.log(i);
// }//报错

// function* objectEntries(obj) {
//     let propKeys = Reflect.ownKeys(obj);
  
//     for (let propKey of propKeys) {
//       yield [propKey, obj[propKey]];
//     }
//   }
  
//   let jane = { first: 'Jane', last: 'Doe' };
  
//   for (let [key, value] of objectEntries(jane)) {
//     console.log(`${key}: ${value}`);
//   }

//   //***********************************************or

// function* objectEntries() {
//     let propKeys = Object.keys(this);
  
//     for (let propKey of propKeys) {
//       yield [propKey, this[propKey]];
//     }
//   }
  
//   let jane = { first: 'Jane', last: 'Doe' };
  
//   jane[Symbol.iterator] = objectEntries;
  
//   for (let [key, value] of jane) {
//     console.log(`${key}: ${value}`);
//   }
//
//关联:Reflact,解构赋值



//异步写成类同步写法
// function* main() {
//     var result = yield request("http://some.url");
//     var resp = JSON.parse(result);
//       console.log(resp.value);
//   }
  
//   function request(url) {
//     makeAjaxCall(url, function(response){
//       it.next(response);
//     });
//   }
  
//   var it = main();
//   it.next();