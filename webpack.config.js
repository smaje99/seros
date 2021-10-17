const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
        })
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
    clean: true
}

// config
const commonConfig = (mode) => ({
    entry: path.join(__dirname, 'src', 'app'),
    module: { rules: rulesCommon(mode) },
    plugins: plugins(mode)
})

const devConfig = {
    ...commonConfig('development'),
    output: { publicPath: '/' },
    devServer
}

const prodConfig = {
    ...commonConfig('production'),
    output
}

module.exports = (env, { mode }) => (
    isProduction(mode) ? prodConfig : devConfig
)