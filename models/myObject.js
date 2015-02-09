var Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().required(),
    schema: Joi.object().required(),
    collection: Joi.string().required(),
    primary_key: Joi.string().required()
});
