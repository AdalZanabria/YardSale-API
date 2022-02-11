const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      caso: 'No hay internet.',
    },
    {
      id: 2,
      caso: 'No sirve impresora.',
    },
    {
      id: 3,
      caso: 'No sirve scanner.',
    },
    {
      id: 4,
      caso: 'No hay tonner.',
    },
  ]);
});

// Todos los endpoints específicos deben de ir antes que los dinámicos
//Los dos puntos antes de id significa que va a ser un parametro
router.get('/:id', (req, res) => {
  const { id } = req.params; //Este nombre {id} tiene que ser el mismo que el nombre del endpoint :id
  res.json({
    id,
    caso: `Tarea ${id}`,
  });
});

/* Así como hay endpoint /tasks/{id} y endpoint /people/{id} para tener tareas y personas en
específico, también puede haber /people/{id}/tasks para obtener las tareas de ese usuario.
*/

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  }
  );
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id
  }
  );
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  }
  );
})

module.exports = router;
