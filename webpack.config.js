var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        pageA:'./src/pageA.js',
        pageB:'./src/pageB.js',
        vendor:['lodash']
    },
    output:{
       path:path.resolve(__dirname,'./dist'),
        publicPath:'./dist/',
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:'/node_modules/',
                include: [path.resolve(__dirname, './dist')]
            }
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor','mainfest'],
            minChunks:Infinity
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name:'common',/* 这里想把业务代码中的公共代码提取出来，重复2次就提取 ，需要指定chunk的范围*/
            minChunks:2,
            chunks:['pageA','pageB']
        })
    ]
}
