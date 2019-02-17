const path = require('path')
const fs = require('fs')

const projectDirectory = fs.realpathSync(process.cwd())
const resolve = relativePath => path.resolve(projectDirectory, relativePath)

module.exports = {
    appIndex: resolve('web/index.js'),
    appRoot: path.resolve(__dirname, '..'),
    components: resolve('web/components'),
    config: resolve('config'),
    htmlRoot: resolve('web/index.html'),
    nodeModules: resolve('node_modules'),
    public: resolve('public'),
    reducers: resolve('web/reducers'),
    scripts: resolve('web/scripts'),
    source: resolve('web'),
    styles: resolve('web/styles'),
}