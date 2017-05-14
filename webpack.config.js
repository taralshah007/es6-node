module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'main.js',
        publicPath:'/build'
    },
    devServer: {
        port:3001,
        contentBase: './src',
        inline: true
    }
}
