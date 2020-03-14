/**
 * Metro configuration for React Native
 * Overrides original to have local access to common
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

module.exports = {
    projectRoot: path.resolve(__dirname, '.'),
    // watchFolders: [path.resolve(__dirname, './node_modules')],
    watchFolders: [path.resolve(__dirname, '../lib')],

    resolver: {
    // https://github.com/facebook/metro/issues/1#issuecomment-453450709
        extraNodeModules: new Proxy(
            {},
            {
                get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
            },
        ),
    },

    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};
