const Jimp = require('jimp')
const fs = require('fs/promises')
const path = require('path')
const {User} = require('../../models/schemaUser')

const avatarPathDir = path.join(__dirname, "../../", "public", "avatars")

const avatarUpdate = async (req, res, next) => {
try {
    const {path: currentPath, originalname} = req.file
    const {_id} = req.user
    const newNameAvatar = `${_id}_${originalname}`
    const resUpload = path.join(avatarPathDir, newNameAvatar)
    
    await fs.rename(currentPath, resUpload)

    Jimp.read(resUpload, (err, lenna) => {
        if (err) throw err;
        lenna
          .resize(250, 250)
          .write(resUpload)
      })

    const newPathAvatar = path.join("avatars", newNameAvatar)

    await User.findByIdAndUpdate(_id, {avatarURL: newPathAvatar})

    res.status(200).json({"avatarURL": newPathAvatar})
} catch (error) {
    next(error)
}
}

module.exports = {avatarUpdate}