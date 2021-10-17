const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = (mode) => mode === 'production';
const isDevelopment = (mode) => mode === 'development';

// plugins
const plugins = (mode) => (
    [
        new HtmlWebpackPlugin({
            title: 'SEROS',
            filename: 'index.html',
            template: path.join(__dirname, 'public', 'index.html'),
            inject: 'body'
        }),
        new Dotenv()
    ].filter(Boolean)
)

// rules
const rulesBabel = (mode) => ({
    test: /\.jsx?$/i,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env',
                ['@babel/preset-react', {
                    runtime: 'automatic',
                    development: isDevelopment(mode)
                }]
            ]
        }
    }
})

const rulesCommon = (mode) => [
    rulesBabel(mode)
]

// devServer
const devServer = {
    client: {
        logging: 'info',
        progress: true
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000
}

// output
const output = {
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    clean: true,
}

// optimization
const optimization = {
    minimize: true,
    minimizer: [
        new TerserPlugin()
    ],
    splitChunks: {
        chunks: 'all'
    },
    nodeEnv: 'production'
}

// resolve
const resolve = {
    alias: {
        Pages: path.resolve(__dirname, 'src', 'app', 'pages'),
        Auth: path.resolve(__dirname, 'src', 'app', 'auth'),
        Routers: path.resolve(__dirname, 'src', 'app', 'routers'),
        Helpers: path.resolve(__dirname, 'src', 'app', 'helpers')
    },
    extensions: ['.jsx', '...'],
    plugins: [ new DirectoryNamedWebpackPlugin() ]
}

// devtool
const devtool = (mode) => (
    isProduction(mode) ? 'hidden-nosources-source-map' : 'cheap-module-source-map'
)

// config
const commonConfig = (mode) => ({
    entry: path.join(__dirname, 'src', 'app', 'index.js'),
    resolve,
    module: { rules: rulesCommon(mode) },
    plugins: plugins(mode),
    devtool: devtool(mode)
})

const devConfig = {
    ...commonConfig('development'),
    devServer
}

const prodConfig = {
    ...commonConfig('production'),
    output,
    optimization
}

module.exports = (env, { mode }) => (
    isProduction(mode) ? prodConfig : devConfig
)