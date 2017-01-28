


module.exports = {
    entry: './components/main.js',
    output: {
        path: './public/javascripts',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './views',
     
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            loader: "babel-loader"
        }]
    }
}