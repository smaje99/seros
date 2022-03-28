const boom = require("@hapi/boom");

const whitelist = [
    'http://localhost:5000',
    'http://localhost:3000',
    'https://smaje99.github.io/seros'
]

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(boom.unauthorized('Not allowed by CORS'));
        }
    }
}

module.exports = corsOptions;