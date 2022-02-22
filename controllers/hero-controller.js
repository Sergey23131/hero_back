const Hero = require('../database/Heroes');

const {errors_code} = require('../errors');

module.exports = {
    getHeroes: async (req, res, next) => {
        try {
            const allHeroes = await Hero.find().select('-real_name,origin_description,catch_phrase',);

            res.status(errors_code.UPDATE_DATA).json(allHeroes);
        } catch (e) {
            next(e);
        }
    },

    getHeroesById: async (req, res, next) => {
        try {
            const oneHero = await Hero.findOne(req.hero);

            res.status(errors_code.UPDATE_DATA).json(oneHero);
        } catch (e) {
            next(e);
        }
    },

    updateHero: async (req, res, next) => {
        try {
            const {hero_id} = req.params;

            const hero = await Hero.findById(hero_id);

            res.status(errors_code.UPDATE_DATA).json(hero);
        } catch (e) {
            next(e);
        }
    },

    createHero: async (req, res, next) => {
        try {

            await Hero.createHero(req.body);

            res.status(errors_code.UPDATE_DATA).json('You create new hero!');
        } catch (e) {
            next(e);
        }
    },

    deleteHero: async (req, res, next) => {
        try {
            const {hero_id} = req.params;

            await Hero.findByIdAndRemove(hero_id);

            res.status(errors_code.UPDATE_DATA).json('Hero is removed!');
        } catch (e) {
            next(e);
        }
    }
};
