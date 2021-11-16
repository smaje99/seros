const dotenv = require('dotenv');

dotenv.config()

module.exports = {
    PORT: process.env.PORT,
    DETA: {
        ID: process.env.DETA_ID,
        KEY: process.env.DETA_KEY
    }
}