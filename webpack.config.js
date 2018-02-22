const path = require('path');
const webpack = require('webpack');
 const PurifyCSSPlugin = require('purifycss-webpack');
 const glob = require('glob-all');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

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
                test:/\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:['env'],
                            plugins:['lodash']
                        }
                    }
                ]
            },
            {
                test:/\.less$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:{
                        loader: 'style-loader',
                        options:{
                            singleton:true
                        }
                    },
                    use: [
                        {
                            loader: 'css-loader'
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
        }),
        new PurifyCSSPlugin({  /* Purifycss 一定要写在 ExtractTextWebpackPlugin后面*/
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/*.js')
            ]),
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
