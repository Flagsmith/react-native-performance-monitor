// webpack.config.dev.js
const webpack = require('webpack');

module.exports = {
    plugins: require('./plugins').concat([
        new webpack.DefinePlugin({
            __DEV__: true,
        }),
    ]),
    module: {
        rules: require('./loaders')
            .concat([]),
    },
};
