const {schemaContacts} = require('../../models/schemaContacts')
const {errorPages} = require('../../helpers/error')

const getContactId = async (req, res, next) => {
    try {
      const {contactId} = req.params
      const result = await schemaContacts.findOne({_id: contactId}).populate("owner", "name email")
      if(!result){
        throw errorPages(404, "Not found")
      }
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

module.exports = getContactId