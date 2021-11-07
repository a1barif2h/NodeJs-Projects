const mongoose = require('mongoose')

const createDB = (url) => {
    mongoose.connect(url)
}

module.exports = createDB