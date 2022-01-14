const boom = require('@hapi/boom');

const config = require('../utils/config');

function withErrorStack(error, stack) {
    return config.dev ? { ...error, stack } : error;
}

function logErrors(err, req, res, next) {
    console.log(err);
    next(err);
}

function wrapErrors(err, req, res, next) {
    next(err.isBoom ? err : boom.badImplementation(err));
}

function errorHandler(err, req, res, next) {
    const {
        output: { statusCode, payload }
    } = err;

    res
        .status(statusCode || 500)
        .json(withErrorStack(payload, err.stack));
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler
}