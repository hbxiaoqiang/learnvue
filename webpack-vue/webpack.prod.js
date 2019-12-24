const merge = require('webpack-merge');
const common = require('./webpack.comm.js');
const path = require('path');
module.exports = merge(common,{
    mode:'production',
    output:{
        filename:'[name].[hash].bundle.js',
        path:path.join(__dirname,'dist')
    },
})