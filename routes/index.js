const express = require('express');
const productsRouter = require('./products.routing');
const usersRouting = require('./users.routing');
const categoriesRouting = require('./categories.routing');
const tasksRouting = require('./tasks.routing');
const tecnicosRouting = require('./tecnicos.routing');
const filterRouting = require('./filters.routing');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRouting);
  router.use('/categories', categoriesRouting);
  router.use('/tasks', tasksRouting);
  router.use('/tecnicos', tecnicosRouting);
  router.use('/filters', filterRouting);
}

module.exports = routerApi;
