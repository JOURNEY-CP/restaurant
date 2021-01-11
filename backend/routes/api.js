const express = require('express');
const router = express.Router();
const itemRouterModule=require('./api/user/item');
const orderRouterModule=require('./api/user/order');
const adminItemRouterModule=require('./api/admin/item');
const adminOrderRouterModule=require('./api/admin/order');
const routerModules = {
    '/user/item': itemRouterModule,
    '/user/order': orderRouterModule,

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
