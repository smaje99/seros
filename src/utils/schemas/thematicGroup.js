const yup = require('yup');

const nameSchema = yup
    .string()
    .matches(/^(intro|algo|lineal|no-lineal)$/, 'Invalid thematic group name')
    .required('Must enter a thematic group name')

const schema = yup.object().shape({
    name: nameSchema
})

module.exports = schema