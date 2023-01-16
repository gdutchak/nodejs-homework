const {registerUser} = require('./registration')
const {loginUser} = require('./login')
const {logoutUser} = require('./logout')
const {currentUser} = require('./currentUser')
const {subscriptionUpdate} = require('./subsUpdate')
const {avatarUpdate} = require('./avatar')
const {verificationRequest} = require('./verification')
const {checkInVerify} = require('./verify')

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    currentUser,
    subscriptionUpdate,
    avatarUpdate,
    verificationRequest,
    checkInVerify
}