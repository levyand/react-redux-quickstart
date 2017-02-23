module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'quickstart.js',
        path: __dirname + '/dist'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.tsx?/,
                use: 'source-map-loader'
            }
        ]
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.tsx', '.ts', '.js']
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    devServer: {
        open: true,
        contentBase: __dirname + '/dist',
        watchContentBase: true,
        port: 9000
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
