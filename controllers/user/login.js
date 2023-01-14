const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {User} = require('../../models/schemaUser')
const {errorPages} = require('../../helpers')

const {SECRET_KEY} = process.env

const loginUser = async(req, res, next) => {
 try {
    const {email, password, verificationToken} = req.body
    if(!verificationToken) {
        throw errorPages(404, 'User is not found')
    }
    const user = await User.findOne({email})
    if (!user) {
        throw errorPages(401, {message: 'Email or password invalid'})
    }
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        throw errorPages(401, {message: 'Email or password invalid'})
    }
    const payload = {
        id: user._id
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '23h'})
    await User.findByIdAndUpdate(user._id, {token})
    res.json({
        token,
        user: {
            email: user.email,
            subscription: user.subscription
        }
    })
 } catch (error) {
    next(error)
 }
}

module.exports = {
    loginUser
}