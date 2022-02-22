const Hero = require('../database/Heroes');
const updateValidator = require('../validators/updateHero_validator');

const {errors_massage, errors_code, ErrorHandler} = require('../errors');

module.exports = {
    updateHeroMiddleware: async (req, res, next) => {
        try {
            const {hero_id} = req.params;

            const {error, value} = updateValidator.updateHeroValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(errors_massage.NOT_VALID_BODY, errors_code.NOT_VALID);
            }

            await Hero.findByIdAndUpdate(hero_id, req.body);

            next();
        } catch (e) {
            next(e);
        }
    },
};