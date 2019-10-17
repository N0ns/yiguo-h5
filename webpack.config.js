//在node.js的环境中应用
//commonJS
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// 导出配置模块
module.exports = {
    // 配置入口文件
    entry:{
        main:path.join(__dirname,'./src/app.js'),
        es6:path.join(__dirname,'./src/js/test.js')
    
    },
    // 配置输出选项
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'js/[name]-bunle-[hash].js'
    },
    // 引入模块别名
    resolve:{
        //  别名
        alias:{
            // 'vue$':'vue/dist/vue.js'
            '@': path.join(__dirname,'./src'),
        }
    },

    //配置环境(默认生产)
    mode:'development',//production

    //静态服务器
    devServer:{
        port:8000,
        contentBase:path.join(__dirname,'./dist'),
        inline:true,//自动刷新
        historyApiFallback:true,
        open:true,//自动打开默认浏览器
        progress:true,//进度条
    },

    //loader配置（加载器）
    module:{
        rules:[
            {
                test:/\.vue$/,//匹配.vue结尾的文件
                loader:['vue-loader']
            },
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },
            {
              test: /\.less$/,
              loader: ['style-loader','css-loader','less-loader'],
            },
            //编译sass
            {
              test: /\.scss$/,
              loader: ['style-loader','css-loader','sass-loader'],
            },
            //编译js
            {
              test: /\.js$/,
              include:path.join(__dirname,'./src'),
              exclude:/node_modules/,
              loader: ['babel-loader']
              
            }
        ]
    },
    // 插件
    plugins:[ 
        // 依据html模板生成一个自动引用你打包后的文件（js或css）的新的html页面
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}