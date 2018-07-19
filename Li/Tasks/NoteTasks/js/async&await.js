//ES6中加入的Generator函数语法糖
//现在 我们来看看它能如何简化我们前面进行的繁琐的操作


//首先 验证async函数如何进行异步操作的流程控制

var promise = function () { 
  return new Promise(function (resolve, reject) { 
    setTimeout(() => { 
      console.log('hello'); resolve() 
    }, 2000) 
  }) 
};
var y = function*(){yield promise(); yield promise()};
var Y = y();
//连续两次调用Y.next()，输出结果几乎同时
var g =  async function(){await promise(); await promise()};
//调用一次g()，两次输出之间相隔两秒/
//可见，async函数能够完全分离地操作异步

//async函数整体返回一个Promise对象，可以进行后续操作
//只有内部所有await相关都resolve，整体才resolve，但凡有一个reject，整体就throw error
//在不设置try catch语句时，内部多个异步操作，前面的reject，那么后面都不会执行
//若有需求让后面的执行，用以下写法：
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
