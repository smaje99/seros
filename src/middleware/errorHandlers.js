const boom = require('@hapi/boom');

function withErrorStack(error, stack) {
    return { ...error, stack };
}

function logErrors(err, req, res, next) {
    console.log(err);
    next(err);
}

function wrapErrors(err, req, res, next) {
    if (!err.isBoom) next(boom.badImplementation(err));

    next(err);
}

function errorHandler(err, req, res, next) {
    const {
        output: { statusCode, payload }
    } = err;

    res
        .status(statusCode)
        .json(withErrorStack(payload, err.stack));
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler
}