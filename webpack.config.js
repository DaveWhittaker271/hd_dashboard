// webpack.config.js
const path = require("path");
const {VueLoaderPlugin} = require('vue-loader')

const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    watch: true,
    resolve: {
        alias: {
            vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {targets: "defaults"}]
                    ]
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: [
                                path.resolve(__dirname, 'src/styles/variables.less'),
                                path.resolve(__dirname, 'src/styles/theme.less'),
                            ],
                            injector: 'prepend'
                        }
                    },
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: '/'
    },
    plugins: [
        new Dotenv(),
        new VueLoaderPlugin(),
    ]
}