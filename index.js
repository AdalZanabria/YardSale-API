const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es mi server de prueba con express.');
});

app.get('/tasks', (req, res) => {
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

//Los dos puntos antes de id significa que va a ser un parametro
app.get('/tasks/:id', (req, res) => {
  const { id } = req.params; //Este nombre {id} tiene que ser el mismo que el nombre del endpoint :id
  res.json({
    id,
    caso: 'No hay internet.',
  });
});

app.get('/people', (req, res) => {
  res.json([
    {
      id: 0,
      name: 'Mauricio',
      area: 'Informatica',
    },
    {
      id: 1,
      name: 'Ivan',
      area: 'Informatica',
    },
    {
      id: 2,
      name: 'Oscar',
      area: 'Informatica',
    },
    {
      id: 3,
      name: 'Gustavo',
      area: 'Informatica',
    },
    {
      id: 4,
      name: 'Adal',
      area: 'Informatica',
    },
  ]);
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Producto 1',
      price: 1000,
    },
    {
      name: 'Producto 2',
      price: 2000,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json(
    {
      id,
      name: 'Producto 1',
      price: 1000
    }
  )
})

app.get('/categories', (req, res) => {
  res.json(
    [
    {
      name: 'Ropa'
    },
    {
      name: 'Calzado'
    },
    {
      name: 'Accesorios'
    }
  ]
  )
})

app.get('/categories/:id', (req, res) => {
  const {id} = req.params;
  res.json(
    {
      id,
      name: 'Ropa'
    }
  )
})

app. get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json(
    {
      categoryId,
      productId,
    }
  )
})

app.get('/users', (req, res) => {
  const {limit, offset} =  req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('No hay parametros')
  }
})

/* Así como hay endpoint /tasks/{id} y endpoint /people/{id} para tener tareas y personas en
específico, también puede haber /people/{id}/tasks para obtener las tareas de ese usuario.
*/
app.listen(port, () => {
  console.log(`Ejecutando desde: http://localhost:${port}`);
});
