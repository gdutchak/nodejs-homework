const express = require('express')
const router = express.Router()
const {validation, schemaWrapper, authenticate, upload} = require('../../midlleware')
const {registerUser, loginUser, logoutUser, currentUser, subscriptionUpdate, avatarUpdate} = require('../../controllers/user')

router.post('/users/register', schemaWrapper(validation.schemaJoiAuth), registerUser)

router.get('/users/login', schemaWrapper(validation.schemaJoiAuth), loginUser)

router.post('/users/logout', authenticate, logoutUser)

router.get('/users/current', authenticate, currentUser)

router.patch('/users', authenticate, schemaWrapper(validation.schemaJoiSubscription), subscriptionUpdate)

router.patch('/users/avatars', authenticate, upload.single("avatars"), avatarUpdate)

module.exports = router