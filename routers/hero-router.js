const heroRouter = require('express')
    .Router();

const {checkIDMiddleware} = require('../middlewares/checkID.middleware');
const {createHeroMiddleware} = require('../middlewares/createHero.middleware');
const {updateHeroMiddleware} = require('../middlewares/updateHero.middleware');
const {checkfile} = require('../middlewares/image.middleware');

const heroController = require('../controllers/hero-controller');

heroRouter.get('/', heroController.getHeroes);

heroRouter.post('/', checkfile, createHeroMiddleware, heroController.createHero);

heroRouter.get('/:hero_id', checkIDMiddleware, heroController.getHeroesById);

heroRouter.put('/:hero_id', checkIDMiddleware, checkfile, updateHeroMiddleware, heroController.updateHero);

heroRouter.delete('/:hero_id', checkIDMiddleware, heroController.deleteHero);

module.exports = heroRouter;
