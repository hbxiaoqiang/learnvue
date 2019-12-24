const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    //mode:'development',

    entry:path.resolve(__dirname,"src/index.js"),

    output:{
        filename:'[hash].bundle.js',
        path:path.join(__dirname,'dist')
    },

    module:{
        rules:[
            {
                test:/\.vue$/,
                use:[
                    'vue-loader'
                ]
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(png|jpeg|jpg)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:512,
                        name:'images/[name].[ext]',
                        publicPath:'../'
                    }
                    },
                ]
            }
        ]
    },

    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
          }),
        new HtmlWebpackPlugin({

        })
    ]
}