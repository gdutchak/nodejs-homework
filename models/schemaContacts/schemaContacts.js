const {Schema, default: mongoose} = require('mongoose')
const {errorCode} = require('../../helpers')

const schema = new Schema ({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    }
  },
  { versionKey: false}
  )

schema.post("save", errorCode)

const schemaContacts = mongoose.model('contact', schema)

module.exports = schemaContacts