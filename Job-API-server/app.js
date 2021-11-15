require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const connectDB = require('./db/connect');
const authRoute = require('./router/auth')
const jobsRoute = require('./router/jobs')
const userAuthenticateMiddleware = require('./middleware/authenticate')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')


const app = express()

app.set('trust proxy', 1)
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(xss())

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/jobs', userAuthenticateMiddleware, jobsRoute)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => console.log(`App is running on port ${process.env.PORT}...
        DB connected...`))
    } catch (error) {
        console.log(error)
    }
}

start()