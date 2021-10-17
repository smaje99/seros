const mongoose = require('mongoose');

const { URI_DB } = require('./utils/config');

mongoose.connect(URI_DB)
    .then(() => console.log('MongoDB is connected'))
    .catch(err => console.error(err))