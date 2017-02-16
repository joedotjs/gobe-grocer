module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /.js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};