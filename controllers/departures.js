const departuresRouter = require('express').Router();
const axios = require('axios');
const config = require('../utils/config');

departuresRouter.get('/', async (request, response) => {

    const departures = await axios.get(config.MBTA_URI, {
        headers: {
            Authorization: config.MBTA_API_KEY
        }
    });

    response.json(departures.data);
});

module.exports = departuresRouter;