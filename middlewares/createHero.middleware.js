const Hero = require('../database/Heroes');
const createValidator = require('../validators/createHero_validator');

const {errors_massage, errors_code, ErrorHandler} = require('../errors');

module.exports = {
    createHeroMiddleware: async (req, res, next) => {
        try {
            const {error, value} = createValidator.createHeroValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(errors_massage.NOT_VALID_BODY, errors_code.NOT_VALID);
            }

            const {nickname} = req.body;

            const heroInfo = await Hero.findOne({nickname});

            if (heroInfo) {
                throw new ErrorHandler(errors_massage.HERO_EXIST, errors_code.EXIST);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
