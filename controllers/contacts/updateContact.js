const {schemaContacts} = require('../../models/schemaContacts')
const {errorPages} = require('../../helpers')

const changeContact = async (req, res, next) => {
    try {
      const {contactId} = req.params
      const {name, email, phone, favorite} = req.body
      const result = await schemaContacts.update({_id: contactId}, {name, email, phone, favorite}, {upsert: false})
      if(!result){
        throw errorPages(404, "Not found")
      }
      res.json({result})
    } catch (error) {
      next(error)
    }
  }

module.exports = changeContact