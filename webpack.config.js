var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

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
            {
                test:/\.less$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:{
                        loader: 'style-loader',
                        options:{
                            singleton:true
                        }
                    },
                    use: [{
                            loader: 'css-loader',
                            options: {
                                //minimize: true,
                                modules: true,
                                localIdentName: '[path][name]_[local]_[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options:{
                                ident:'postcss',
                                plugins:[
                                    require('postcss-cssnext')()
                                ]
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:'[name].min.css',
            allChunks:false /*提取css的范围，默认false，只提取初始使用的，如果设为true，就提取全部。*/
        })
    ]
}
