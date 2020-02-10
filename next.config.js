const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.BUNDLE_ANALYZE === 'true',
});
const withSourceMaps = require('@zeit/next-source-maps')();


const nextConfig = {
    // next-offline options
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: new RegExp('.*?.woff'),
                handler: 'CacheFirst',
                options: {
                    cacheName: 'fonts',
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: (60 * 60 * 24) * 10, // 2 days
                    },
                    cacheableResponse: {
                        statuses: [0, 200, 304],
                    },
                },
            },
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'https-calls',
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    },
    // buildId, dev, isServer, defaultLoaders, webpack
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

module.exports = withOffline(
    withSourceMaps(
        withBundleAnalyzer(
            withSass(
                withCSS(nextConfig),
            ),
        ),
    ),
);
