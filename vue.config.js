const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    runtimeCompiler: true,
    devServer: {
        //新版的webpack-dev-server增加了安全验证，默认检查hostname，如果hostname不是配置内的，将中断访问。
        //用natapp内网穿透的时候会出现 Invalid Host header，设置这个就不会进行安全验证，
        //配合内网穿透插件natapp，手机跟电脑就不需要在同一个局域网内也可以进行真机测试。
        disableHostCheck: true,
        open: false, //浏览器自动打开页面
        //host，真机测试IP地址，也就是你自己电脑的IP，你手机要跟你电脑在同一个局域网内，
        //特别强调，注意开发调试时的console.log()，打印过多会撑爆微信浏览器缓存，就打不开页面了，坑死。
        //访问192.163.1.109:8090就能真机测试啦，下面跨域的设置配好了也不用担心跨域问题。
        // host: "172.16.11.77",
        host: "localhost",
        //真机测试端口
        port: 8083,
        https: false,
        hotOnly: true, //热更新（webpack已实现了，这里false即可）
        proxy: {
            '/api': {
                target: 'https://www.baidu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
        },
    },
    publicPath :process.env.NODE_ENV === 'production' ?'/mobile/anew/v4/dist':'/',
    // 打包去掉map文件
    productionSourceMap:false,
}
