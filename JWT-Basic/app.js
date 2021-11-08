require('dotenv').config();
require('express-async-errors');

const express = require('express');
const mainRouter = require('./router/main')
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

const app = express()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        app.listen(port, () => console.log(`app is running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
};

start();