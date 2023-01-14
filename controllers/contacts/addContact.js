const {schemaContacts} = require('../../models/schemaContacts')
const {errorPages} = require('../../helpers')

const addContactItem = async (req, res, next) => {
    try {
      const {body} = req
      const {_id: owner} = req.user
      const result = await schemaContacts.create({...body, owner})
      if(!result){
        throw errorPages(400, "missing required name field")
      }
      res.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }

module.exports = addContactItem