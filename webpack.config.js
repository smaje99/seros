const path = require('path');

const isProduction = (mode) => mode === 'production';
const isDevelopment = (mode) => mode === 'development';

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

// config
const commonConfig = (mode) => ({
    entry: path.join(__dirname, 'src', 'app'),
    module: { rules: rulesCommon(mode) }
})

const devConfig = {
    ...commonConfig('development')
}

const prodConfig = {
    ...commonConfig('production')
}

module.exports = (env, { mode }) => (
    isProduction(mode) ? prodConfig : devConfig
)