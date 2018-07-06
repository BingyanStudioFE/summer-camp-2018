# 第一个demo
+ 面试时被问到了这种布局，
    当时自己不会，现在来补一补。
#### 遇到的问题：
1. 知道将3个*div*嵌套入一个*div*里，不知道怎么把两个*div*放在同一行
2. 不知道底层foot固定


#### 解决办法
1. 将两个*div*嵌套在一个*div*中，前一个设置**float：left**，并设置合适*width*
2. 为底部*div*设置**position：fixed**


#### 收获
1. 当把一个*div*左浮点与另外一个同行时，右边的*margin-left*属性值是左*div*的宽度
        所以想将他们隔开时，设置*margin-left*应该是**720px**而不是~~20px~~
    这种设置方法如果左边*div*过长，也会把右边*div*挤到下一行
2. *div*块的边框由**border：1px solid ‘color’**打出，而且可以由*border-right*、*border-bottoom*等定义四边样式
3. *div*块级元素，其高度可以根据字体大小加宽变窄
4. 当底部*foot*不设置**position：fixed**和**width：99%**时，页面显示是充满那一行
        设置**position：fixed**后盒模型就只有文字那么大了，定义了*width*才复原