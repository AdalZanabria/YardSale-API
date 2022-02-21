const express = require('express');
const productsRouter = require('./products.routing');
const categoriesRouter = require('./categories.routing');
const usersRouter = require('./users.routing');
const ordersRouter = require('./orders.routing');
const tasksRouter = require('./tasks.routing');
const tecnicosRouter = require('./tecnicos.routing');
const filterRouter = require('./filters.routing');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', ordersRouter);
  router.use('/tasks', tasksRouter);
  router.use('/tecnicos', tecnicosRouter);
  router.use('/filters', filterRouter);
}

module.exports = routerApi;
