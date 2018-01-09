var path = require('path');

module.exports = {
    entry:{
        app:'./src/app.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'./dist/',
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        rules:[
            // {
            //     test: /\.js$/,
            //     use:{ loader:'babel-loader' },
            //     exclude:'/node_modules/',
            //     include: [path.resolve(__dirname, './dist')]
            // },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: 'style-loader',
                        options:{
                            //insertInto:'#app',
                            singleton:true,
                           // transform:'./css.transform.js'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options:{
                         //   minimize:true,  /*压缩css代码*/
                            modules:true,
                            localIdentName:'[path][name]_[local]_[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    }
}
