# WebPack! 

> 本人小白一枚,平常只在用Vue搭建项目的时候碰过WebPack,今天借助网上的优秀文章过一遍，看到的都在下面这个配置文件里了。

```js
webpack.config.js:

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
        entry: __dirname + "/app/main.js", 
        output: {
            path:"/build",
            publicPath:"",//这个路径会被添加到你的项目有关的hash前面
            //background-image:url('./test.png) // 路径变为'/dist/.test.png'
		   //path: '/build' 上面打包后的文件位置，那么路径变为'/dist/build/build.js'
            //publicPath重要而且好用，比如在生产环境中你的项目可能跑在heroku上面，那么你在publicPath写上你的服务器ip地址就好了
            filename: "bundle-[hash].js"
        },
        devtool: 'none',
        resolve: {                   // 查找module的话从这里开始查找
    		root: 'D:/webpack-test/src',//包含模块的目录
    		extensions: ['.js', '.json', '.scss'],//加载模块可以忽略的扩展名
    		alias: {
       		//模块定义的别名。举几个例子：
        		'ABC':'/js/a/b/abc.js';
            	//require('ABC');相当于require('/js/a/b/abc.js');
       			'ABC':'/js/s';
            	//require('ABC');相当于require('/js/s/index.js');
            	//require('ABC/other.js');相当于require('/js/s/other.js');
    }
        devServer: {
            contentBase: path.join(__dirname, "public"), //本地服务器所加载的页面所在的目录，最好写绝对路径
            historyApiFallback: true, //不跳转
            inline: true,
            hot: true//添加HMR插件以实现热更新
            host: //主机名 默认localhost
            port: //端口号，默认8080
        },
        module: {					//理解为对一些特殊模块做一些特殊处理，特殊模块指的是匹配test正则的模块，特殊处理指调用loader中的工具处理
            rules: [{
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader"
                    },
                    exclude: /node_modules/  //这一部分不进行处理
                }, {
                    test: /\.css$/,
                    use:['style-loader','css-loader']
                  //loader:['style-loader','css-loader']
                }
            }
        ]
    },  
    plugins: [  //相当于用外部插件对要打包的项目做强制干预，包括但不限于模板编译输出，捆绑优化，定义类环境变量等。
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
};
```

嗯，一个写的差不多的文件就大概长这个样子。关于webpack与其他工具的优劣比较因为我自己也没怎么用过Grunt Glup这些所以就不多说了。

要使用webpack，首先习惯性全局安装一波先，然后在你想用webpack的项目中局部安装（不要忘了--save-dev）

want to learn more? [here](https://www.npmjs.com/package/webpack)

