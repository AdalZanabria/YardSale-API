const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');
const { checkApiKey } = require('./middlewares/auth.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//CORS
const whitelist = ['http://localhost:8080', '127.0.0.1:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido.'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola, este es mi server de prueba con express.');
});

app.get('/nueva-ruta',
checkApiKey,
(req, res, next) => {
  try {
    res.send("Esta es una nueva ruta.")
  } catch (error) {
    next(error);
  }
}
);

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Ejecutando desde: http://localhost:${port}`);
});
