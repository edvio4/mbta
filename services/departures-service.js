const axios = require('axios');
const config = require('../utils/config');
const mapper = require('../mappers/mbta-mapper');

let getMbtaDepartures = async function getMbtaDepartures() {
    const url = 'https://api-v3.mbta.com/predictions';
    const mbtaData = await axios.get(url, {
        params: {
            include: 'trip,schedule,stop',
            'filter[direction_id]': 0,
            'filter[route_type]': 2,
            'filter[stop]': 'place-north'
        },
        headers: {
            Authorization: config.MBTA_API_KEY
        }
    });

    return mapper.mapDepartures(mbtaData.data);
};

module.exports = { getMbtaDepartures };