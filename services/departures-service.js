const axios = require('axios');
const config = require('../utils/config');
const mapper = require('../mappers/mbta-mapper');

const railRouteType = 2;
const outboundDirection = 0;

let getMbtaDepartures = async function getMbtaDepartures(station) {
    let params = {
        include: 'trip,schedule,stop',
        'filter[direction_id]': outboundDirection,
        'filter[route_type]': railRouteType
    };

    if (station) {
        params['filter[stop]'] = station;
    }

    const url = 'https://api-v3.mbta.com/predictions';
    const mbtaData = await axios.get(url, {
        params: params,
        headers: {
            'X-API-Key': config.MBTA_API_KEY
        }
    });

    return mapper.mapDepartures(mbtaData.data);
};

module.exports = { getMbtaDepartures };