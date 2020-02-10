// Define common loaders for different file types
module.exports = [
    {
        test: /\.(md|txt)$/,
        use: 'raw-loader',
    },
];
