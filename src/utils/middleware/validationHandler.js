const boom = require('@hapi/boom');

/**
 * ⁡⁢⁢⁢validate data in schema and handle validations errors.
 *
 * @private
 * @param {*} data - data to validate.
 * @param schema - schema to validate data.
 * @returns {(undefined|string)} Errors in data validation
 */
const validate = async (data, schema) => {
    try {
        await schema?.validate(data);
    } catch (err) {
        return err.errors?.join('\n');
    }
}

/**
 * validate the data of the check selected in the scheme.
 *
 * @param schema - schema to validate data.
 * @param {string} [check=body] - check of the request where the data is extracted
 */
const validationHandler = (schema, check = 'body') => (
    async (req, res, next) => {
        const error = await validate(req[check], schema);

        error ? next(boom.badRequest(error)) : next()
    }
)

module.exports = validationHandler;