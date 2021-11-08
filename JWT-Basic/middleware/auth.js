const jwt = require('jsonwebtoken');
const { UnAuthorizationError } = require('../errors')

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnAuthorizationError('Token not provided')
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {id: decoded.id, username: decoded.username};
        next()
        
    } catch (error) {
        throw new UnAuthorizationError('Not authorization to access this route')
    }
}

module.exports = authenticationMiddleware;