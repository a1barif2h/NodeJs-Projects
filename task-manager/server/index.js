const express = require('express');
const cors = require('cors');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config()

const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors())

// routes
app.use('/api/v1/tasks', tasks);

app.use(notFound)

app.use(errorHandler)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...
            also db connected...`)
        });
    } catch (error) {
        console.log(error)
    }
}

start()

