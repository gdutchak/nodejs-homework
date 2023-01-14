const {sendMessage, errorPages} = require('../../helpers')
const {User} = require('../../models/schemaUser')
const sgMail = require('@sendgrid/mail')

const checkInVerify = async (req, res, next) => {
    try {
        const { email } = req.body
        const user = await User.findOne({email})

        if(user.verificationToken) {
            throw errorPages(400, 'Verification has already been passed')
        }

    sgMail
        .send(sendMessage(email))
        .then(() => {
          console.log('Email sent')
          res.status(200).json('Verification email sent')
        })
        .catch((error) => {
          console.error(error)
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkInVerify
}