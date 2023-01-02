const multer = require('multer')
const path = require('path')

const pathTmp = path.join(__dirname, "../", "tmp") 

const multerConfig = multer.diskStorage({
destination: pathTmp 
})

const upload = multer({
  storage: multerConfig
})

module.exports = upload