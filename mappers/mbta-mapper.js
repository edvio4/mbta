let mapDepartures = function mapDepartures(data) {
    if (!data.data || !data.data.length) return [];

    let departures = [];
    let predictions = {};
    let trips = {};
    let schedules = {};
    let stops = {};

    data.data.forEach(pred => {
       predictions[pred.id] = pred;
    });

    data.included.forEach(obj => {
        if (obj.type === 'trip') {
            trips[obj.id] = obj.attributes;
        } else if (obj.type === 'schedule') {
            schedules[obj.id] = obj.attributes;
        } else {
            stops[obj.id] = obj.attributes;
        }
    });

    for (let key in predictions) {
        const prediction = predictions[key];
        const scheduleId = prediction.relationships.schedule.data.id;
        const tripId = prediction.relationships.trip.data.id;
        const stopId = prediction.relationships.stop.data.id;

        const departure = {
            carrier: 'MBTA',
            departureTime: schedules[scheduleId].departure_time,
            destination: trips[tripId].headsign,
            trainNumber: trips[tripId].name,
            trackNumber: stops[stopId].platform_code,
            status: prediction.attributes.status
        }

        departures.push(departure);
    }

    return departures;
};

module.exports = { mapDepartures };