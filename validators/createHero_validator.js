const Joi = require('joi');

const createHeroValidator = Joi.object({
    nickname: Joi
        .string()
        .trim()
        .required(),
    real_name: Joi
        .string()
        .trim()
        .required(),
    origin_description: Joi
        .string()
        .trim()
        .required(),
    superpowers: Joi
        .string()
        .trim()
        .required(),
    catch_phrase: Joi
        .string()
        .trim()
        .required(),

});

module.exports = {
    createHeroValidator
};
