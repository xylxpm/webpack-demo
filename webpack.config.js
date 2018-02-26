var path = require('path');
var webpack = require('webpack');
// var PurifyCSSPlugin = require('purifycss-webpack');
// var glob = require('glob-all');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var extractLess = new ExtractTextWebpackPlugin({
    filename: '[name].min.css',
})

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            jquery$:path.resolve(__dirname,'./src/libs/jquery.min.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    fallback: {
                        loader: 'style-loader',
                        options: {
                            singleton: true,
                        }
                    },
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },

                        // {
                        //     loader: 'postcss-loader',
                        //     options: {
                        //         ident: 'postcss',
                        //         plugins: [
                        //             require('postcss-sprites')({
                        //                 spritePath: 'dist/assets/imgs/sprites',
                        //                 retina: true
                        //             }),
                        //             require('postcss-cssnext')()
                        //         ]
                        //     }
                        //     /* postcss-loader 合成雪碧图 ,spritePath合成之后的图片存放的位置，retina处理视网膜屏幕使用的图片，注意对应图片要用@2x命名，css中样式宽高除2*/
                        // },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [

                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '',
                            outputPath: 'dist/',
                            useRelativePath: true
                        }
                        /* file-loader 处理css中的图片。outputPath指定输出目录，useRelativePath生成相对url地址，publicPath公共路径，最外层的output不能设置公共路径，否则不起作用*/
                    },
                    // {
                    //     loader: 'url-loader',
                    //     options: {
                    //         name: '[name]-[hash:5].[ext]',
                    //         limit: 1000,
                    //         outputPath: 'assets/imgs/'
                    //     }
                    //    /* url-loader base64编码。limit 最小容量，name图片名字。配合postcss-loader使用*/
                    // },
                    {
                        loader: 'img-loader',
                        options: {
                            pngquant: {
                                quality: 80
                            }
                        }
                        /* img-loader 压缩图片。pngquant处理png类型的图片，还有别的参数，参看npmjs站上的说明*/
                    }
                ]
            }
            ,
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].[ext]',
                            limit: 5000,
                            publicPath: '',
                            outputPath: 'dist/',
                            useRelativePath: true
                        }
                    }
                ]
            }
        ]
    }
    ,
    plugins: [
        extractLess,

        // new PurifyCSSPlugin({
        //     /* Purifycss 一定要写在 ExtractTextWebpackPlugin后面*/
        //     paths: glob.sync([
        //         path.join(__dirname, './*.html'),
        //         path.join(__dirname, './src/*.js')
        //     ]),
        // }),
        new webpack.ProvidePlugin({
            $: "jquery"
        })
        // ,
        // new webpack.optimize.UglifyJsPlugin()
    ]
}
