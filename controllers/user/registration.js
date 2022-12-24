const bcrypt = require('bcrypt')
const {User} = require('../../models/schemaUser')
const {errorPages} = require('../../helpers/error')

const registerUser = async(req, res,next) => {
try {
    const {email, password} = req.body
    const checkUser = await User.findOne({email})
    if(checkUser) {
        throw errorPages(409, 'email in use')
    }
    const user = await User.create({...req.body, password: await bcrypt.hash(password, 10)})
    res.status(201).json({
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
    registerUser
}