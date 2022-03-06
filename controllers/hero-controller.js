const Hero = require('../database/Heroes');

const {errors_code} = require('../errors');
const path = require('path');

module.exports = {
    getHeroes: async (req, res, next) => {
        try {
            const perPage = 5;
            const page = 1;

            const allHeroes = await Hero.find()
                .select('real_name image')
                .limit(+perPage)
                .skip((page - 1) * perPage);

            //  const fileData = await fs.readFile(`./${allHeroes.image.name}`);

            res.status(errors_code.UPDATE_DATA)
                .json(allHeroes);
        } catch (e) {
            next(e);
        }
    },

    getHeroesById: (req, res, next) => {
        try {

            res.status(errors_code.UPDATE_DATA)
                .json(req.hero);
        } catch (e) {
            next(e);
        }
    },

    updateHero: async (req, res, next) => {
        try {
            const {hero_id} = req.params;

            const hero = await Hero.findById(hero_id);

            const myFile = req.files.image;//image(name of field in postman)

            const filepath = path.join('./upload/' + hero_id + myFile.name);

            await myFile.mv(filepath);

            await Hero.findByIdAndUpdate(hero_id, {...req.body, image: filepath});

            res.status(errors_code.UPDATE_DATA)
                .json(hero);
        } catch (e) {
            next(e);
        }
    },

    createHero: async (req, res, next) => {
        try {

            const myFile = req.files.image;//image(name of field in postman)

            const filepath = path.join('./upload/' + req.body.nickname + myFile.name);

            await myFile.mv(filepath);

            await Hero.createHero({...req.body, image: filepath});

            res.status(errors_code.UPDATE_DATA)
                .json('You create new hero!');
        } catch (e) {
            next(e);
        }
    },

    deleteHero: async (req, res, next) => {
        try {
            const {hero_id} = req.params;

            await Hero.findByIdAndRemove(hero_id);

            res.status(errors_code.UPDATE_DATA)
                .json('Hero is removed!');
        } catch (e) {
            next(e);
        }
    }
};
