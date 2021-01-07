const express = require('express');
const router = express.Router();
const itemRouterModule=require('./api/item');
const orderRouterModule=require('./api/order');
const adminItemRouterModule=require('./api/admin/item');
const adminOrderRouterModule=require('./api/admin/order');
const routerModules = {
    '/item': itemRouterModule,
    '/order': orderRouterModule,

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
