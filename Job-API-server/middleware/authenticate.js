const jwt = require('jsonwebtoken')
const { UnAuthorizationError } = require('../error')


const auth = async (req, res, next) => {
    const authHeaders = req.headers.authorization

    if(!authHeaders || !authHeaders.startsWith('Bearer ')) {
        throw new UnAuthorizationError('Authenticate Invalid')
    }
    const token = authHeaders.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userId: payload.userId}
        next()
    } catch (error) {
        throw new UnAuthorizationError('Authenticate Invalid')
    }
}

module.exports = auth