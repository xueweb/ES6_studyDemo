/**
 * Created by PhpStorm.
 * User: Helti
 * Date: 2017/8/12
 * Time: 16:35
 */
var path = require('path')
var webpack = require('webpack')

module.exports ={
    entry:'./test/index.js',
    output: {
        filename: "[name][hash].js",
        path: path.join(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    }
}