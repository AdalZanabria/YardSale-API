const express = require('express');
const TasksService = require('../services/tasks.service');

const router = express.Router();
const service = new TasksService();

router.get('/', (req, res) => {
  const tasks = service.find();
  res.json(tasks);
});

// Todos los endpoints específicos deben de ir antes que los dinámicos
//Los dos puntos antes de id significa que va a ser un parametro
router.get('/:id', (req, res) => {
  const { id } = req.params; //Este nombre {id} tiene que ser el mismo que el nombre del endpoint :id
  const task = service.findOne(id);
  res.json(task);
});

/* Así como hay endpoint /tasks/{id} y endpoint /people/{id} para tener tareas y personas en
específico, también puede haber /people/{id}/tasks para obtener las tareas de ese usuario.
*/

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
