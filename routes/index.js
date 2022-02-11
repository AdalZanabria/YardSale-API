const productsRouter = require('./products.routing');
const usersRouting = require('./users.routing');
const categoriesRouting = require('./categories.routing');
const tasksRouting = require('./tasks.routing');
const tecnicosRouting = require('./tecnicos.routing');

function routerApi(app){
  app.use('/products', productsRouter);
  app.use('/users', usersRouting);
  app.use('/categories', categoriesRouting);
  app.use('/tasks', tasksRouting);
  app.use('/tecnicos', tecnicosRouting);
}

module.exports = routerApi;
