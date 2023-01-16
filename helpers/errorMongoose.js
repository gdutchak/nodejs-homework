const errorCode = (err, _, next) => {
    const {code, name} = err;
    err.status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
    next();
}

module.exports = {
    errorCode
}