const  { BadRequestError }  = require("../errors");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) {
        throw new BadRequestError('Username and password are required')
    }

    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30day'})
    res.status(201).json({msg: 'User created', token})
}

const dashboard = async (req, res) => {
    const luckyNumber= Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hi ${req.user.username}`, secret: `Here is your authorized data. Your lucky number is ${luckyNumber}`})

}

module.exports = {
    login,
    dashboard
}