const express = require('express');
const router = express.Router();
const sampleRouterModule=require('./api/sample');

const routerModules = {
    '/sample': sampleRouterModule,
};

apiRouter = DBConnect => {
    Object.keys(routerModules).forEach(path => {
        router.use(path, routerModules[path](DBConnect));
    });
    return router;
}

module.exports = apiRouter;
