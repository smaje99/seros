const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const { PORT } = require('./utils/config');
const {
    logErrors,
    wrapErrors,
    errorHandler
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

// Settings
app.set('port', PORT);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', require('./routes'));

// Static files
app.use('/', express.static(path.join(__dirname, '..', 'dist')));

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


// Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})