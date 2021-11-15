const  CustomAPIError  = require("./custom-API");
const { StatusCodes } = require('http-status-codes')

class UnAuthorizationError extends CustomAPIError{
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuthorizationError;