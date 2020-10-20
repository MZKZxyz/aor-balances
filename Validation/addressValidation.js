const Joi = require('@hapi/joi')

const addressValidation = data => {
    const schema = Joi.object({
        address: Joi.string().min(42).max(42).alphanum().required(),
    })

    return schema.validate(data);
}

module.exports = {addressValidation};