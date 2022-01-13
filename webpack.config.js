const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = (mode) => mode === 'production';
const isDevelopment = (mode) => mode === 'development';

// plugins
const plugins = (mode) => (
    [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'public', 'index.html'),
            inject: 'body'
        }),
        new Dotenv({
            path: path.join(__dirname, isProduction(mode) ? '.env' : '.local.env')
        }),
        isProduction(mode) && new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
        }),
        isProduction(mode) && new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public', 'assets'),
                    to: path.resolve(__dirname, 'dist', 'assets')
                }
            ]
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
                ['@babel/preset-env', {
                    useBuiltIns: 'usage',
                    corejs: 3.18
                }],
                ['@babel/preset-react', {
                    runtime: 'automatic',
                    development: isDevelopment(mode)
                }]
            ],
        }
    }
})

const rulesStyles = (mode) => ({
    test: /\.css$/i,
    use: [
        isProduction(mode)
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
        'css-loader'
    ]
})

const rulesFonts = {
    type: 'asset/resource',
    test: /\.(woff|woff2|eot|ttf|otf)$/i
}

const rulesImages = {
    type: 'asset/resource',
    test: /\.(svg|png|jpe?g|gif)$/i
}

const rulesCommon = (mode) => [
    rulesBabel(mode),
    rulesStyles(mode),
    rulesFonts,
    rulesImages
]

// devServer
const devServer = {
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
        new TerserPlugin(),
        new CssMinimizerPlugin()
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
        Helpers: path.resolve(__dirname, 'src', 'app', 'helpers'),
        Utils: path.resolve(__dirname, 'src', 'app', 'utils'),
        Components: path.resolve(__dirname, 'src', 'app', 'components'),
        Images: path.resolve(__dirname, 'src', 'app', 'assets', 'images'),
        Hooks: path.resolve(__dirname, 'src', 'app', 'hooks'),
        Services: path.resolve(__dirname, 'src', 'app', 'services')
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