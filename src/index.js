const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const { PORT } = require('./utils/config');

const app = express();

// MongoDB connection
require('./database');

// Settings
app.set('port', PORT);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/thematicGroups', require('./routes/thematicGroups.routes'));

// Static files
app.use('/', express.static(path.join(__dirname, '..', 'dist')));


// Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})