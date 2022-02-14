const express = require('express');
const TecnicosService = require('../services/tecnicos.service');

const router = express.Router();
const service = new TecnicosService();

router.get('/', (req, res) => {
  const tecnicos = service.find();
  res.json(tecnicos);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const tecnico = service.findOne(id);
  res.json(tecnico);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newTecnico = service.create(body);
  res.status(201).json(newTecnico);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const tecnico = service.update(id, body);
  res.json(tecnico);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id);
  res.json(response);
});

module.exports = router;
