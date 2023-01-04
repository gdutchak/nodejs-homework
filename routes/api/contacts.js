const express = require('express')
const router = express.Router()
const {getContacts, getContactId, addContact, changeContact, deleteContact, updateStatusContact} = require('../../controllers/contacts')
const {validation} = require('../../midlleware')
const {schemaWrapper} = require('../../midlleware')
const {authenticate} = require('../../midlleware')

router.get('/', authenticate, getContacts)

router.get('/:contactId', authenticate, getContactId)

router.post('/', authenticate, schemaWrapper(validation.schemaJoiContacts), addContact)

router.delete('/:contactId', authenticate, deleteContact)

router.put('/:contactId', authenticate, schemaWrapper(validation.schemaJoiContacts), changeContact)

router.patch('/:contactId/favorite', authenticate, updateStatusContact)

module.exports = router
