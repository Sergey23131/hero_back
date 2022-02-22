const Hero = require('../database/Heroes');

const {ErrorHandler, errors_massage, errors_code} = require('../errors');


module.exports = {
    checkIDMiddleware: async (req, res, next) => {
        try {
            const {hero_id} = req.params;

            const oneHero = await Hero.findById(hero_id).select('');

            if (!oneHero) {
                throw new ErrorHandler(errors_massage.NOT_FOUND_BY_ID, errors_code.NOT_FOUND);
            }

            req.hero = oneHero;

            next();
        } catch (e) {
            next(e);
        }
    }
};