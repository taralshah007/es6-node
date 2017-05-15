module.exports = {
    entry: ['./src/index.js','./src/es6-let/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'main.js',
        publicPath:'/build'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port:3001,
        contentBase: './src',
        inline: true
    }
}
