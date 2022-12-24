const Joi = require('joi');

const schemaJoiContacts = Joi.object({
    name: 
        Joi.string()
        .required(),
    email: 
        Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    phone: 
        Joi.string()
        .alphanum()
        .required(),
    favorite:
        Joi.boolean(),
    })


const schemaJoiAuth = Joi.object({
    password: 
        Joi.string()
        .required(),
    email: 
        Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    subscription: 
        Joi.string()
        .valid('starter', 'pro', 'business'),
})

const schemaJoiSubscription = Joi.object({
    subscription: 
        Joi.string()
        .valid('starter', 'pro', 'business')
        .required()
})

const validation = {
    schemaJoiContacts,
    schemaJoiAuth,
    schemaJoiSubscription
}

module.exports = validation