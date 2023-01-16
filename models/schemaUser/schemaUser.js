const {Schema, default: mongoose} = require('mongoose')
const {errorCode} = require('../../helpers')

const schema = new Schema ({
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: {
      type: String,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
    verify: {
      type: Boolean,
      default: false,
    }

  }, {
    versionKey: false
  })

schema.post("save", errorCode)

const User = mongoose.model('user', schema)

module.exports = {
    User
}