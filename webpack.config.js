var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        pageA:'./src/pageA.js',
        pageB:'./src/pageB.js',
        vendor:['lodash']
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
        //new webpack.optimize.CommonsChunkPlugin({
        //    names:['vendor','mainfest'],/* 如果其他参数一样，只有name不一样，可以用names写这样的配置。这里和下面两个配置功能一样， */
        //    minChunks:Infinity
        //}),

        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',/* 这里指定entry的名字，可以把第三方依赖库和webpack生成的代码打包在一起 */
            minChunks:Infinity /* Infinity说明不打包任何模块 */
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'mainfest',/* 写一个entry里没有的名字，可以把第三方依赖库和webpack生成的代码区分开 */
            minChunks:Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',/* 这里想把业务代码中的公共代码提取出来，重复2次就提取 ，需要指定chunk的范围*/
            minChunks:2,
            chunks:['pageA','pageB']
        })
    ]
}
