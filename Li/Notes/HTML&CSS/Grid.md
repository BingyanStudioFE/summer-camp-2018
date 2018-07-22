# Grid:hear_no_evil:

> 好用的css布局不多，像Grid这样的更是少之又少。Flex是另外一个强大的布局方案，只不过它只能进行一维的布局

gird的布局思想是分块，有点像刚开始前端布局时候用的table布局方法，但要灵活的多。比如，在table布局中你可能会把一个页面搞成这个样子：

|      |      |      |      |
| :--: | ---- | ---- | ---- |
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |

啊。。随便你，总之要想实现你就必须写一些嵌套的<tr><td>之类的东西。有了grid布局，你解放了，因为你可能只写了4个填充内容就能做出3*12的表格，而且是表现与结构分离的！这意味着你可以任意调整填充物在css中的的顺序而不用管在html中它是什么样子的。多说无益，先上代码：

```css
<div class="container">
  <div class="header">HEADER</div>
  <div class="menu">MENU</div>
  <div class="content">CONTENT</div>
  <div class="footer">FOOTER</div>
</div>
```

这，就是我们上面所说的 结构 ，它是我们css表现得骨架，但却可能和实际的效果没什么关系。

好了，我们来写css  

想要用grid，像flex一样，先要说明谁是容器，用`display:grid;`来声明。emm我还是先把完整的代码写一遍再解释

```css
.container {
    display: grid;    
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 50px 350px 50px;
    grid-gap: 5px;
}
```

grid-template-columns:容器的列，可以写成px，百分比，上面的fr是另外一种单位，它的意思是，把剩下的空间按权重分配。上面repeat的语意是：1fr 重复12次，等同于：`1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr`

grid-template-columns:容器的行。这个写的比较好理解

grid-gap:在网格线之间添加间隙。



现在，结构有了，容器也有了剩下的就是如何把我们想的表现出来了。想想也知道表现方法肯定是要定义在容器中的。看到html里面的四种div了吧，在grid布局中我们相当于把基础的html结构抽象一层，为了做到 抽象 这一步，我们先给HTML里面的div们添加一些可以被grid布局认识的标志：

```css
.header {
    grid-area: h;
}
.menu {
    grid-area: m;
}
.content {
    grid-area: c;
}
.footer {
   grid-area: f;
}
```

什么是grid-area ？你可以理解为给div添加了独特的grid标签，因为我们接下来要这么写了：

```css
.container {
    display: grid;
    grid-gap: 5px;    
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 50px 350px 50px;
    grid-template-areas:
        "h h h h h h h h h h h h"
        "m m c c c c c c c c c c"
        "f f f f f f f f f f f f";
}
```

grid-template-areas:这才是最核心的东西，是我们抽象ch出来的表现层。现在就理解grid-area的意思了:标有h的div就占有h部分标有m的就占有m的部分。这个属性完全就是把前面你划分的网格用你在HTML结构中定义的div给填充了。而且具体怎么填充不是HTML说了算的，是css决定了的。比如你想让左边的div移动到右面，你只需要这样写：

```css
grid-template-areas:
        “h h h h h h h h h h h h”
        "c c c c c c c c c c m m”
        “f f f f f f f f f f f f”;
```



看到没？简易且强大。利用这一点，你能把媒体查询实现到简单得令人发指：

```
.container {
    display: grid;
    grid-gap: 5px;    
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 50px 350px 50px;
    grid-template-areas:
        "h h h h h h h h h h h h"
        "m m c c c c c c c c c c"
        "f f f f f f f f f f f f";
}

@media screen and (max-width: 640px) {
    .container{
        grid-template-areas:
          "m m m m m m h h h h h h"
          "c c c c c c c c c c c c"
          "f f f f f f f f f f f f";
    }
}
```

当你的页面变化，仅凭一段css就能改变你的整个页面布局！

这就是Grid布局

具体的属性介绍看[这里](http://www.css88.com/archives/8510)  

[demo](../Tasks/NoteTasks/HTML26%CSS/Grid.html)
