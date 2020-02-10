// webpack.config.prod.js
// Watches + deploys files minified + cachebusted
const webpack = require('webpack');

module.exports = {
    plugins: require('./plugins').concat([
        new webpack.DefinePlugin({
            __DEV__: false,
        }),
    ]),
    module: {
        rules: require('./loaders')
            .concat([]),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 60000,
            cacheGroups: {
                polyfill: {
                    test: /[\\/]project[\\/]polyfill/,
                },
            },
        },
    },
};
