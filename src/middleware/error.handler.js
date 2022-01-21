const boom = require('@hapi/boom');

const config = require('../utils/config');

/**
 * If the environment is development it returns the error
 * with its stack, otherwise it only returns the error
 * @param {*} error error
 * @param {*} stack error stack
 * @returns error depending on the environment
 */
function withErrorStack(error, stack) {
    return config.dev ? { ...error, stack } : error;
}


/**
 * Track errors in the application
 * @param {*} err error
 * @param {*} req request
 * @param {*} res response
 * @param {function} next next middleware callback
 */
function logErrors(err, req, res, next) {
    console.error(err);
    next(err);
}

/**
 * Check if the error is wrapped, if not,
 * it wraps it and returns a 500 status code
 * @param {*} err error
 * @param {*} req request
 * @param {*} res response
 * @param {function} next next middleware callback
 */
function wrapErrors(err, req, res, next) {
    next(err.isBoom ? err : boom.badImplementation(err));
}

/**
 * Manages the error, returning the status code and
 * the respective error message.
 * @param {*} err error
 * @param {*} req request
 * @param {*} res response
 * @param {function} next next middleware callback
 */
function errorHandler(err, req, res, next) {
    const {
        output: { statusCode, payload },
        headers
    } = err;

    res
        .status(statusCode)
        .json(withErrorStack({ ...payload, headers }, err.stack));
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler
}