const createDB = require('./db/createDB');
const Product = require('./models/products');
const jsonProducts = require('./products.json')

require('dotenv').config();

const start = async () => {
    try {
        createDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success...')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()