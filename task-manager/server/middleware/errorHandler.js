const { CustomAPIError } = require("../db/customError");

const errorHandler = (err, req, res, next) => {

    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({err: err.message})
    }
    return res.status(500).json({err: 'Something happened wrong!', error: err})
}

module.exports = errorHandler;