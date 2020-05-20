const departuresRouter = require('express').Router();
const departuresService = require('../services/departures-service');

departuresRouter.get('/', async (request, response) => {
    const departures = await departuresService.getMbtaDepartures();

    response.json(departures);
});

module.exports = departuresRouter;