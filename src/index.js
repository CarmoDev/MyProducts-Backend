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

app.listen('https://restapi-myproducts.herokuapp.com/', () => console.log('🔥 Server started at http://localhost:3001'));
