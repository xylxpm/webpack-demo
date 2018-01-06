var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        pageA:'./src/pageA.js'
    },
    output:{
       path:path.resolve(__dirname,'./dest'),
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        rules:[
            {
                test:/\.js/,
                use:{
                    loader:'babel-loader'
                },
                exclude:'/node_modules/'
            }
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks:2
        })
    ]
}
