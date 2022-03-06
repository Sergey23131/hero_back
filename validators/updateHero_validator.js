const Joi = require('joi');

const updateHeroValidator = Joi.object({
    origin_description: Joi
        .string()
        .trim(),
    superpowers: Joi
        .string()
        .trim(),
    catch_phrase: Joi
        .string()
        .trim(),
    image:Joi
        .object()

});

module.exports = {
    updateHeroValidator
};
