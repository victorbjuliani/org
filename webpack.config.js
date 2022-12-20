const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                test: /\.jpg/,
                type: 'asset/resource'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
        node: {
            child_process: 'empty'
        }
    }
};