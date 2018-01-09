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
                                minimize: true,
                                modules: true,
                                localIdentName: '[path][name]_[local]_[hash:base64:5]'
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
            filename:'[name].min.css'
        })
    ]
}
