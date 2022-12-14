const messageSt = {
    400: "Bad request",
    401: "Not authorization",
    404: "Not found",
}

const errorPages = (status, message = messageSt[status]) => {
const error = new Error(message)
error.status = status
return error
}

module.exports = {
    errorPages
}