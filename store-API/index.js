require('dotenv').config()
require('express-async-errors')
const express = require('express')
const cors = require('cors')
const notFoundMiddleware = require('./middleware/notFound')
const errorMiddleware = require('./middleware/errorHandler')
const createDB = require('./db/createDB')
const productsRouter = require('./router/products')

const app = express()

app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1> <a href="/api/v1/products">Products Route</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        createDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`server up at port ${port}...
        DB is connected...`))
    } catch (error) {
        console.log({error})
    }
}

start()
