const CustomAPIError = require('./custom-API')
const BadRequestError = require('./bad-request')
const UnAuthorizationError = require('./unAuthorization')
const NotFoundError = require('./not-found')

module.exports = {
    CustomAPIError,
    BadRequestError,
    UnAuthorizationError,
    NotFoundError
}