const express = require('express');
const router = express.Router();
const itemRouterModule=require('./api/item');

const routerModules = {
    '/item': itemRouterModule,
};

apiRouter = DBConnect => {
    Object.keys(routerModules).forEach(path => {
        router.use(path, routerModules[path](DBConnect));
    });
    return router;
}

module.exports = apiRouter;
