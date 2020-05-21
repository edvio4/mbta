const logger = require('./logger');

const errorHandler = (error, request, response, next) => {
    logger.error(error);

    if (error.isAxiosError) {
        logger.error(error.response.data.errors);

        return response.status(error.response.status).send(error.response.data.errors);
    }

    next(error);
};

module.exports = {
    errorHandler
};