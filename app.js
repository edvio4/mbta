const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const departuresRouter = require('./controllers/departures');
const middleware = require('./utils/middleware');


app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use('/api/departures', departuresRouter);

app.use(middleware.errorHandler);

module.exports = app;