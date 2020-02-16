const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const nextConfig = {
    // next-offline options
    webpack: (config, { dev }) => {
        const base = dev ? require('./webpack/webpack.config.dev') : require('./webpack/webpack.config.prod');
        if (base.plugins) {
            config.plugins = config.plugins.concat(base.plugins);
        }

        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        return config;
    },
};

module.exports = withSass(
    withCSS(nextConfig),
);
