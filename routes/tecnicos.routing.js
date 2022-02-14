const express = require('express');
const TecnicosService = require('../services/tecnicos.service');

const router = express.Router();
const service = new TecnicosService();

router.get('/', async (req, res) => {
  const tecnicos = await service.find();
  res.json(tecnicos);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tecnico = await service.findOne(id);
  res.json(tecnico);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newTecnico = await service.create(body);
  res.status(201).json(newTecnico);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const tecnico = await service.update(id, body);
    res.json(tecnico);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

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
