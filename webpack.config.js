// var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        mulu: './src/js/mulu'
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                text: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.jpg$|\.png|\.svg$/, loader: 'url?limit=80000&name=[name].[ext]' }
        ]
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.json', '.less'],
        alias: { // 设置别名

        }
    },
    externals: {
        'jQuery': 'jQuery'
    }
};