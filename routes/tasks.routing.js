const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      caso: 'No hay internet.',
    },
    {
      caso: 'No sirve impresora.',
    },
    {
      caso: 'No sirve scanner.',
    },
  ]);
});

// Todos los endpoints específicos deben de ir antes que los dinámicos
//Los dos puntos antes de id significa que va a ser un parametro
router.get('/tasks/:id', (req, res) => {
  const { id } = req.params; //Este nombre {id} tiene que ser el mismo que el nombre del endpoint :id
  res.json({
    id,
    caso: 'Se acabó el tonner.',
  });
});

/* Así como hay endpoint /tasks/{id} y endpoint /people/{id} para tener tareas y personas en
específico, también puede haber /people/{id}/tasks para obtener las tareas de ese usuario.
*/

module.exports = router;
