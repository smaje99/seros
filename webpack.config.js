const path = require('path');

const isProduction = (mode) => mode === 'production';
const isDevelopment = (mode) => mode === 'development';

// config
const commonConfig = (mode) => ({
    entry: path.join(__dirname, 'src', 'app')
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