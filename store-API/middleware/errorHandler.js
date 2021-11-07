const errorHandler = (err, req, res, next) => {
    return res.status(500).json({msg: 'Something happened wrong! Please try again.', err})
}

module.exports = errorHandler;