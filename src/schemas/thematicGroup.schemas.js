const yup = require('yup');

const nameSchema = yup
    .string()
    .matches(/^(intro|algo|lineal|no-lineal)$/, 'Invalid thematic group name')

const schema = yup.object().shape({
    name: nameSchema.required('Must enter a thematic group name')
})

module.exports = schema