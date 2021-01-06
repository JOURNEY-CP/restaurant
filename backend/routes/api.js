const express = require('express');
const router = express.Router();
const itemRouterModule=require('./api/item');
const adminItemRouterModule=require('./api/admin/item');
const adminOrderRouterModule=require('./api/admin/order');
const routerModules = {
    '/item': itemRouterModule,
    '/admin/item':adminItemRouterModule,
    '/admin/order':adminOrderRouterModule
};

apiRouter = DBConnect => {
    Object.keys(routerModules).forEach(path => {
        router.use(path, routerModules[path](DBConnect));
    });
    return router;
}

module.exports = apiRouter;
