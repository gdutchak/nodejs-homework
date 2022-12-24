const jwt = require('jsonwebtoken')
const {errorPages} = require('../helpers/error')
const {User} = require('../models/schemaUser')

const {SECRET_KEY} = process.env

const authenticate = async(req, res, next) => {
    try {
    const {authorization = ''} = req.headers
    const [bearer, token] = authorization.split(' ')
    if(bearer !== "Bearer" || !token) {
        throw errorPages(401)
    }
    const {id} = jwt.verify(token, SECRET_KEY)
    const user = await User.findById(id)
    if(!user || !user.token) {
        throw errorPages(401)
    }
    req.user = user
    next()
    } catch {
        next(errorPages(401))
    }
}

module.exports = authenticate