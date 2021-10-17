const dotenv = require('dotenv');

dotenv.config()

module.exports = {
    URI_DB: process.env.URI_DB,
    PORT: process.env.PORT
}