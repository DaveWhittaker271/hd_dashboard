// webpack.config.js
const path = require("path");
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    watch: true,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
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
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
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
    // Where to compile the bundle
    // By default the output directory is `dist`
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
}