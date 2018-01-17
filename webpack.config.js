const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');;

const PROD = process.env.NODE_ENV === 'production';

config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'jshint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                },
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 1337,
        open: true,
        inline: true,
        hot: true
    },
    plugins: PROD ? [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ecma: 7,
                warnings: false,
            }
        }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // })
    ] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};

// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map'
//     // http://vue-loader.vuejs.org/en/workflow/production.html
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//     ])
// }

module.exports = config;
