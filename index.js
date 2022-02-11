const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, este es mi server de prueba con express.');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Ejecutando desde: http://localhost:${port}`);
});
