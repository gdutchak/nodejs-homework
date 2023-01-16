const {errorPages} = require('../helpers')

const schemaWrapper = schema => {
    const data = (req, _, next) => {
        const {error} = schema.validate(req.body)
        if(error) {
            next(errorPages(400, error))
        }
        next()
    }
    return data
}

module.exports = schemaWrapper