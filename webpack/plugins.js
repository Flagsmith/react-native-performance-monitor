const webpack = require('webpack');

const props = {
    E2E: process.env.E2E,
    ENV_NAME: JSON.stringify(process.env.NAME),
    ENV_TYPE: JSON.stringify(process.env.ACCOUNT_TYPE),
};

module.exports = [

    new webpack.DefinePlugin(props),

    // Fixes warning in moment-with-locales.min.js
    // Module not found: Error: Can't resolve './locale' in ...
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment\/min$/),

];
