const merge = require('webpack-merge');
const common = require('./webpack.comm.js');

module.exports = merge(common,{
    mode:"development",
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist'
    }
})