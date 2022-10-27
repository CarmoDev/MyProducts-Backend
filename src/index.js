// Cria um servidor com express;
const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const routes = require('./routes');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('%c Server running', 'color: green');
});
