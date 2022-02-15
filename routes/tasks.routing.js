const express = require('express');
const TasksService = require('../services/tasks.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createTaskSchema,
  updateTaskSchema,
  getTaskSchema,
} = require('../schemas/tasks.schemas');

const router = express.Router();
const service = new TasksService();

router.get('/', async (req, res) => {
  const tasks = await service.find();
  res.json(tasks);
});

// Todos los endpoints específicos deben de ir antes que los dinámicos
//Los dos puntos antes de id significa que va a ser un parametro
router.get(
  '/:id',
  validatorHandler(getTaskSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params; //Este nombre {id} tiene que ser el mismo que el nombre del endpoint :id
      const task = await service.findOne(id);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }
);

/* Así como hay endpoint /tasks/{id} y endpoint /people/{id} para tener tareas y personas en
específico, también puede haber /people/{id}/tasks para obtener las tareas de ese usuario.
*/

router.post(
  '/',
  validatorHandler(createTaskSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newTask = await service.create(body);
    res.status(201).json(newTask);
  }
);

router.patch(
  '/:id',
  validatorHandler(getTaskSchema, 'params'),
  validatorHandler(updateTaskSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const task = await service.update(id, body);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
