require('dotenv').config();

let PORT = process.env.PORT;
let MBTA_API_KEY = process.env.MBTA_API_KEY;

module.exports = {
    MBTA_API_KEY,
    PORT
};