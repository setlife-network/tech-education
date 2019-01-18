const webpack = require('webpack')
const merge = require('webpack-merge')

const common = require('./webpack.common')
const paths = require('./paths')

module.exports = merge(common, {
    mode: 'development',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            paths.appIndex
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    // webpack-dev-server config
    devServer: {
        // where to look for static files when building
        contentBase: paths.public,
        // bundled files will be available in browser under this path
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0',
        inline: true,
        open: false
    },
    output: {
        pathinfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
})