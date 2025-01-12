const {schemaContacts} = require('../../models/schemaContacts')
const {errorPages} = require('../../helpers/error')

const deleteContact = async (req, res, next) => {
    try {
      const {contactId} = req.params
      const result = await schemaContacts.remove({_id: contactId})
      if(!result){
        throw errorPages(404, "Not found")
      }
      res.json({"message": "contact deleted"})
    } catch (error) {
      next(error)
    }
  }
  
module.exports = deleteContact