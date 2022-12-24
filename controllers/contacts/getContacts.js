const {schemaContacts} = require('../../models/schemaContacts')

const getContacts = async (req, res, next) => {
    try {
      const {_id: owner} = req.user
      const {page = 1, limit = 20, favorite} = req.query
      const skip = (page - 1) * limit;
      if(favorite) {
        const result = await schemaContacts.find({owner, favorite}, "", {skip, limit}).populate("owner", "name email")
        
        res.json(result)
      }
      const result = await schemaContacts.find({owner}, "", {skip, limit}).populate("owner", "name email")
      
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

module.exports = getContacts