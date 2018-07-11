# 丝滑demo之CSS-> ::before && ::after  

> CSS中::before&::after伪元素常用于修饰已有的DOM元素

* ## 常见用法:  

  `.el::before { content : "text"; }`

  这段代码会在class为el的元素之前生成一缕文字，当然我们可以给它添加各种修饰属性美化之，但无论如何，这样的修饰是死板的。

* ## 提升一个台阶:
  你想要在用户对某样东西感兴趣时及时推送出该物品的介绍，可以这样写:

  ```
   .content::after {
  	background: blue;
  	position: absolute;
  	width: 100%;
  	height: 30%;
  	pacity: 0;						//opacity不透明度
      transition: .3s ease-in-out;
      ontent: attr(text);			//text是定义在.content元素上的属性
    }
    .content:hover::after {
      opacity: 1;
    }
  ```

    

  这样写的结果是，鼠标放在元素上就会在底部显示出相关介绍

* ## 更加有质感:  

  > 借助transform动画属性

  以上`opacity`属性替换为`transform`动画:
```
  .content::after {
    ...
    transform: translateY(100%);
  }
  .content:hover::after {
    transform: translateY(0);
  }
```
* ## 想用就用  

  > 一些简洁的文字动画效果完全可以由伪元素+transform实现而不必借助js，比如：下划线的动效，只需要修改以上代码，使伪元素固定在底部，限制高度，将动画方向设置为X即可
  >
  > 具体demo见同名html文件