const {schemaContacts} = require('../../models/schemaContacts')
const {errorPages} = require('../../helpers/error')

const changeContact = async (req, res, next) => {
    try {
      const {contactId} = req.params
      const {body} = req.body
      const result = await schemaContacts.update({_id: contactId}, {name: body.name, email: body.email, phone: body.phone, favorite: body.favorite}, {upsert: false})
      if(!result){
        throw errorPages(404, "Not found")
      }
      res.json({ ...body})
    } catch (error) {
      next(error)
    }
  }

module.exports = changeContact