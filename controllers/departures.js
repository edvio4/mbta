const departuresRouter = require('express').Router();
const departuresService = require('../services/departures-service');

departuresRouter.get('/', async (request, response) => {
    let station = request.query.station || '';
    const departures = await departuresService.getMbtaDepartures(station);

    response.json(departures);
});

module.exports = departuresRouter;