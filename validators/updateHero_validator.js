const Joi = require('joi');

const updateHeroValidator = Joi.object({
    origin_description: Joi
        .string()
        .trim()
        .required(),
    catch_phrase: Joi
        .string()
        .trim()
        .required(),


});

module.exports = {
    updateHeroValidator
};
