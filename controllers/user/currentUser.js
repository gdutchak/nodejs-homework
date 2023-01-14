const {User} = require('../../models/schemaUser')
const {errorPages} = require('../../helpers')

const currentUser = async(req, res, next) => {
    try {
        const {email, subscription} = req.user
        res.json({message: {email, subscription}})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    currentUser
}