const CustomAPIError = require("./customError");
const { StatusCodes } = require('http-status-codes')

class unAuthorizationError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = unAuthorizationError;