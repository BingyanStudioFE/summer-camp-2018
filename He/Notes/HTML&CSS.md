# 从〇开始的HTML搬砖

## 7.06 

8:00a.m.-6:00p.m.  一直在机房实训搬砖，emmm [Github](https://github.com/VincentCung) 为证

7:30p.m. - - 在看 W3C的规范 [参考链接1](https://www.w3.org/TR/2017/REC-html52-20171214/introduction.html)  

> **超文本标记语言 (HTML) **是 Web 内容的核心语言。HTML 语言描述了 Web 文档内容的结构和语义。
>
> **HTML** was primarily designed as a language for semantically describing scientific documents

体验：W3C的官方HTML5.2 文档除了常用的标签 也介绍了很多网络，浏览器的知识，实在晦涩难懂，于是只能选择性优先阅读能读的懂的部分

### 知识点：

1. secure application

   - Not validating user input Cross-site scripting (XSS) SQL injection，

     需要对用户的输入进行有效验证，防止跨域的脚本注入，而导致安全问题的发生

   - CSRF 

     用户发送请求时必须验证请求是否由用户故意，而不是通过另一个网站欺骗用户在不知不觉中发出请求；原因：HTML表单可以提交到其他origin

   - clickJack

     需要设计向用户提供用于执行用户可能不希望执行的动作的界面的页面，以避免用户被欺骗激活界面的可能性，简单来说就是提供**取消**的选项给用户。

2. common pitfalls to avoid when using the script APIs

   深入理解HTML执行顺序，避免脚本执行时的错误

3. comformance requirements

   - Presentational Markup 的废除，用style标签或属性取代实现标签的展示；原因：维护成本高，文档冗余，降低访问性能

   - 语法错误的限制 [具体各类错误的展示](https://www.w3.org/TR/2017/REC-html52-20171214/introduction.html#syntax-errors)

     - 一个错误的代码块

     ```html
     <a href="?bill&ted">Bill and Ted</a> <!-- &ted is ok, since it’s not a named character reference -->
     <a href="?art&amp;copy">Art and Copy</a> <!-- the & has to be escaped, since &copy is a named character reference -->
     ```

     ​

   - 内容模型和属性值的限制：

4. Document metadata

   - what`s in the head?

     - title 页标签名 document.title

     - base (herf target) 文档基地址

     - link 链接到其他资源 常见属性：href，rel，type，title，media，herflang

     - meta 页面的元数据 name/http-equiv/charset 必须有一个 且有content对应

       - name与content 元数据的键值对  

         - author/description/keywords 便于搜索引擎

         - 自定义的元数据协议 

           ```html
           <meta name="twitter:title" content="Mozilla Developer Network">
           <!-- this is a custom metadata protocol-->

           ```

         - 定义文档特定视口特征

         ```html
         <meta content="width=device-width, initial-scale=1, shrink-to-fit=no,maximum-scale=1.0" name="viewport">
         <!-- this is a custom metadata usage in moblie-->
         ```

         - [...](https://www.w3.org/TR/2017/REC-html52-20171214/document-metadata.html#standard-metadata-names)

       - http-equiv

       - charset 基本都是utf-8

       - property

     - style

另一个[参考连接2](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) 是MDN
