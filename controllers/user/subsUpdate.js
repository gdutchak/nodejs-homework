const {User} = require('../../models/schemaUser')
const {errorPages} = require('../../helpers/error')

const subscriptionUpdate = async(req, res, next) => {
    try {
        const {subscription} = req.body
        const {_id} = req.user
        const user = await User.findById(_id)
        if(!user) {
            throw errorPages(401)
        }
        const result = await User.findOneAndUpdate(_id, {subscription}, {new: true})
        if(!result) {
            throw errorPages(404)
        }
        res.json({message: {
            email: result.email,
            subscription: result.subscription
        }})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    subscriptionUpdate
}