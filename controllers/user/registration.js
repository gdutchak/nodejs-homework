const bcrypt = require('bcrypt')
const gravatar = require('gravatar')
const {User} = require('../../models/schemaUser')
const {errorPages} = require('../../helpers')
const shortid = require('shortid')
const {sendMessage} = require('../../helpers')

const registerUser = async(req, res,next) => {
try {
    const {email, password } = req.body

    const checkUser = await User.findOne({email})
    
    if(checkUser) {
        throw errorPages(409, 'email in use')
    }

  const user = await User.create({...req.body, password: await bcrypt.hash(password, 10), avatarURL: gravatar.url(email), verificationToken: shortid()})

  await sendMessage(email, user.verificationToken)

  return res.status(200).json('Verification email sent')

} catch (error) {
    next(error)
}
}

module.exports = {
    registerUser
}