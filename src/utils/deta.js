const { Deta } = require('deta');

const { DETA } = require('./config');

const deta = Deta(DETA.KEY);

const database = (name) => deta.Base(name);

const drive = (name) => deta.Drive(name);

module.exports = {
    database,
    drive
}