## 今日简报
**兔子** 
|今日任务|完成与否|  
|:-:|:-:|  
|完善FLEX布局并总结笔记|完成|  
|回顾CSS3伪类伪元素并总结笔记|完成|  
|结合以上所学做demo||  

# FLEX
## 内含元素属性
    .flex-box{
        order: <integer>;
         flex-grow: <number>; /* default 0 */
         flex-shrink: <number>; /* default 1 */
         flex-basis: <length> | auto; /* default auto */
         align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }
## 含义
* flex-direction：属性决定主轴的方向（即项目的排列的方向）。

* flex-wrap：规定容器内元素排不下如何换行。

* flex-flow：属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

* justify-content：属性规定容器元素在 主抽的对齐方式（即X轴为基准方向）

* align-items：属性规定容器元素在 交叉轴的对齐方式（即Y轴为基准的方向）

* align-content：属性定义了多根轴线的对齐方式。如果项目只有一根轴线（容器元素不换行），该属性不起作用
## 容器属性
    .box{
    display: flex;
    flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    flex-flow: <flex-direction> || <flex-wrap>;
    justify-content: flex-start | flex-end | center | space-between | space-around;
    align-items: flex-start | flex-end | center | baseline | stretch;
    }
## 含义
* order：属性定义项目的排列顺序。数值越小，排列越靠
前，默认为0。

* flex-grow：容器元素的放大比例，默认0

* flex-shrink：容器元素的缩小比例，默认1

* flex-basis:元素分配对于空间之前，规定主轴空间的大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

* flex： flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

* align-self：允许单个容器元素与其他容器元素 不一样的的对齐方式，继承align-items 属性。

# CSS3 伪类 伪元素摘要汇总（半搬运）  

## 伪类  
> 类 即 状态 ，在CSS3中无状态也是一种状态  

| 标识符 |    含义    |          用法          |
| :----: | :--------: | :--------------------: |
| :link  | 链接未访问 | 需要在此类元素的最前面 |
|:visited|链接已访问|-|
|:hover|鼠标悬停|非链接亦可|
|:active|已激活|在鼠标点击与释放之间触发|
|:focus|获取焦点|常用于表单|
|:first-child|父元素的第一个子元素|标记在子元素上|
|:first-of-type|各个种类的第一个元素|-|
|:last-child|-|-|
|:last-of-type|-|-|
|:not|除指定元素之外|-|
|:nth-child|识别指定的子元素|功能强大|
|:nth-child(n)|n可为整数/odd/even|n也可为形似2n+1的语义表达|
|:nth-last-child|功能用法同上|顺序相反|
|:nth-of-type|用法参看:nth-child|-|
|:nth-last-of-type|用法同上|顺序相反|
|:only-child|指定只有一个孩子的父元素|-|
|:only-of-type||-|
|:target|指定具有特殊id的url|-|
|:checked|单选按钮，复选框以及已经被选择的选项元素|-|
|:disabled|禁用元素|-|
|:empty|空元素|-|
|:enabled|启用元素|-|
|:in-range|在指定范围内的元素|`<input type="number" min="5" max="10">`|
|:out-of-range|同上|作用相反|
|:indeterminate|有多个选择且没有默认选择的元素|如options没有default|
|:valid|通过匹配的元素|`input[type=email]:valid`|
|:invalid|未通过匹配的元素|-|
|:optional|没有required属性的元素|-|
|:read-only|不能编辑的元素|类似disabled|
|:read-write|与上相反|具有contenteditableHTML属性的元素也可被指定|
|:required|具有requiredHTML属性的元素|-|
## 伪元素  
> DOM树里面没有，伪元素是虚元素，不存在但可操控  

|标识符|含义|用法|
|:-:|:-:|:-:|
|::before/::after|给另外HTML元素添加内容|添加内容不存在且需要在CSS中声明|
|`<h1>Ricardo</h1>`|`h1:after{content:"-";}`|-|
|::backdrop|全屏元素之后其他元素之前|和:fullscreen伪类结合改变最大化屏幕的背景颜色（单冒号不起作用）|
|::first-letter|文本第一个字母|使用::before生成的文本也可以被指定首字母|
|::first-line|元素的第一行|只在块级元素之中起作用|
|::placeholder|字面含义|非标准|




