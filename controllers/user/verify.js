const {sendMessage, errorPages} = require('../../helpers')
const {User} = require('../../models/schemaUser')

const checkInVerify = async (req, res, next) => {
    try {
        const { email } = req.body
        const user = await User.findOne({email})

        if(!user || user.verify) {
            throw errorPages(400, 'Verification has already been passed')
        }

        await sendMessage(user.email, user.verificationToken)

        return res.status(200).json('Verification email resent')

    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkInVerify
}