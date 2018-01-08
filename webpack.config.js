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
            async:'async-common',
            children:true,
            minChunks:2

        })
    ]
}
