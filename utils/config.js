require('dotenv').config();

let PORT = process.env.PORT;
let MBTA_API_KEY = process.env.MBTA_API_KEY;
let MBTA_URI = process.env.MBTA_URI;

module.exports = {
    MBTA_URI,
    MBTA_API_KEY,
    PORT
};