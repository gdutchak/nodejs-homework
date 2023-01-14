const {User} = require('../../models/schemaUser')
const {errorPages} = require('../../helpers')

const logoutUser = async(req, res, next) => {
    try {
        const {_id} = req.user
        const user = await User.findByIdAndUpdate(_id, {token: ""})
        if(!user) {
            throw errorPages(401)
        }
        res.status(204).json({
            message: "no content"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    logoutUser
}