const express = require('express')
const router = express.Router()
const {validation} = require('../../midlleware')
const {schemaWrapper, authenticate} = require('../../midlleware')
const {registerUser, loginUser, logoutUser, currentUser, subscriptionUpdate} = require('../../controllers/user')

router.post('/users/register', schemaWrapper(validation.schemaJoiAuth) ,registerUser)

router.get('/users/login', schemaWrapper(validation.schemaJoiAuth), loginUser)

router.post('/users/logout', authenticate, logoutUser)

router.get('/users/current', authenticate, currentUser)

router.patch('/users', authenticate, schemaWrapper(validation.schemaJoiSubscription), subscriptionUpdate)

module.exports = router