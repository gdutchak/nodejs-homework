const {User} = require('../../models/schemaUser')
const {errorPages} = require('../../helpers')

const verificationRequest = async (req, res, next) => {
    try {
        const { verificationToken } = req.params
        const user = await User.find({verificationToken})
        
        if(!user) {
            throw errorPages(404, "message: 'User not found'")
        }
        await User.findOneAndUpdate({verificationToken: null, verify: true})

        res.status(200).json({message: 'Verification successful'})
    } catch (error) {
        next(error)
    }
}

module.exports = {verificationRequest}