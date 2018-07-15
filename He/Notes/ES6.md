# ES6工地的召唤

## 知识点：

### class关键字的 方法与属性们

> 在编写todomvc过程中，试着去用了新的class关键字去实现面向对象的编程，说到类肯定就免不了实例属性/方法 私有属性/方法 静态属性/方法，大概查阅了资料后，发现了几种通用的解决方案 [参考1](https://segmentfault.com/a/1190000008606016) [参考2](http://es6.ruanyifeng.com/#docs/class#Class-%E7%9A%84%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%E5%92%8C%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7)

首先是实例的属性和方法，即实例才可访问的方法和属性 最简单的方案就是在`constructor`函数内用`this`去为实例直接添加，至于实例方法应该添加在`class`内的其他地方

```js
class Myclass {
  constructor(name){
    this.sex = 'man'
    this.name = name;
    this.getName(){
		return this.name
    }
  }
  getSex(){
	return this.sex	
  }
}
```

区别: 如果在constructor内定义的方法 将直接在实例的属性内，能被`Object.getOwnPropertyNames`获得，而如果是在class内定义方法那方法将会在实例的`__proto__`属性内，可以被`Reflect.getPropertyOf` 或`Object.getPropertyOf`获得原型后访问。

---

再来是静态方法，所谓静态方法，即类没有实例时也可访问的属性，庆幸的是ES6给我们提供了`static`方法即可，可是属性呢？ 目前的属性都还在**提案**阶段，变量是不能直接写在class内的！！！！！！ 阮一峰的文档只是提案，并不能实际使用！！！！ 

```js
class Foo {
  // 写法一
  prop: 2

  // 写法二
  static prop: 2
  
    // 写法三
  static prop= 2
}

//以上均未实现，醒醒，该搬砖了
```



但是给了ES6又给了我们 getter 和 setter 的语法糖 （艾玛，真香），get和set内是可以访问this的，还有一个就是如果本来constructor存在的属性，再添加该属性的 get或者set都会报错,还有在 get，set内就不要再调用自己了。如果要保存值，可以在CLASS外定义其他变量来保存

大概就是这样咯

```js
let store = 0
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return store;
    //return this.prop 这样会无限递归报错的。。。
  }
  set prop(value) {
    sotre = value
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop // 123
```



一般getter setter 不用会这样单独使用，处非是中间变量的预处理，更多是可以配合static去实现静态变量

```js
let store = 0
class MyClass {
  constructor() {
    // ...
  }
  static get prop() {
    return store;
    //return this.prop 这样会无限递归报错的。。。
  }
  static set prop(value) {
    sotre = value
    console.log('setter: '+value);
  }
  
  static foo() {
	console.log('i am static')	
  }
}


MyClass.prop // 0
MyClass.foo() // i am static

```



---

最后是最纠结的私有属性/方法了，从定义上简单来说就是外部的实例不能调用，只能内部去使用的东西，在如阮一峰的指南中可以看到，有两种方案，第一种是将函数写在class外 那么，不同文件的地方就无法调用该方法了，另一种是我觉得相对更有效的就是利用Symbol

```js
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{
  
  constructor(){
    this[snaf] = foo // 私有属性
  }

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};
```

### 面向对象后的回调函数

> 之前写js基本好少会用到面向对象的思想编写，即很少在回调函数内添加`this`，todomvc让我狠狠的踩到了这个坑，回调函数在别的函数使用时，内部的`this`会默认成当前调用他的对象，一般是`window` 然后里面就各种unfinded了 ,其实其中也是闭包的坑。

解决方案1 在函数后面使用bind

```
something.on('click',function(){
  this.say()
}.bind(this))
```

解决方案2 箭头函数直接使用

```
something.on('click',()=>{
  this.say()
})
```



### 不会冒泡的Blur focus事件 

> 不知道是老了记不住还是根本没遇到过，今天写这个事件卡了N久，终于发现原来blur和focus是不会冒泡的，所以在外层根本不存在监听，要外层监听只能使用capture参数

### 7.14 急需一个ESLint的指南

尝试没有看文档 直接ESlint --init 根据参数进行了ESlint的配置，当然结果会是一片红，各种尝试，发现其实ESlint并不能完美帮你自动格式化，剩下的部分还是需要手动更改，于是我终于领悟到ESlint的真谛：报什么错就把什么设成off 我可真是小机灵呢