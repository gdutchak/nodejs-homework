const {errorPages} = require('../../helpers/error')
const {schemaContacts} = require('../../models/schemaContacts')

const updateStatusContact = async (req, res, next) => {
try {
    const {favorite} = req.body.body
    const {contactId} = req.params
    if(!favorite) {
        throw Error(errorPages(400, "missing field favorite"))
    }
    const contact = await schemaContacts.update({_id: contactId}, {favorite: favorite})
    if(!contact){
        throw Error(errorPages(404, "Not found"))
    }
    res.json(contact)
} catch (error) {
    next(error)
}
}

module.exports = updateStatusContact