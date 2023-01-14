const {errorPages} = require('./errorPage')
const {errorCode} = require('./errorMongoose')
const {sendMessage} = require('./sendVerifyMessage')

module.exports = {
    errorPages,
    errorCode, 
    sendMessage
}