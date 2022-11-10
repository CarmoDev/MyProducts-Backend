// Cria um servidor com express;
const express = require('express');
require('express-async-errors');

const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`🔥 Server started at ${PORT}`));
