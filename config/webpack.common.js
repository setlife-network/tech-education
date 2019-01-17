const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const paths = require('./paths')

module.exports = {
    // where webpack resolves files relative to
    context: paths.appRoot,
    entry: {
        vendor: [
            '@babel/polyfill',
            'styled-components',
            'react',
            'react-dom',
            'redux'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        // where app is built to
        path: paths.public,
        // where app is served from
        publicPath: '/',
    },
    resolve: {
        extensions: ['.jsx', '.js', '.less'],
        modules: [paths.nodeModules],
        // commonly imported directories ie. import Row from 'styles'
        alias: {
            scripts: paths.scripts,
            styles: paths.styles,
            components: paths.components,
            public: paths.public,
            reducers: paths.reducers
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.htmlRoot,
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            {
                from: 'public',
                ignore: ['*.less']
            }
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: paths.source,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(c|le)ss$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                    'url-loader'
                ]
            },
            {
                include: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    stats: {
        // show asset information
        assets: true,
        // add chunk information
        chunks: true,
        // add chunkGroups information
        chunkGroups: true,
        colors: true,
    }
}
