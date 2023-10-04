const { Router } = require('express')
const multer = require("multer");
const uploadConfig = require("../configs/upload")

const UsersController = require('../controllers/UsersController')
const UsersAvatarController = require('../controllers/UserAvatarController')

const ensureAuthenticad = require('../middlewares/ensureAuthenticad')

const usersRouter = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()
const usersAvatarController = new UsersAvatarController

usersRouter.post('/', usersController.create)
usersRouter.put('/', ensureAuthenticad ,usersController.update)
usersRouter.patch('/avatar', ensureAuthenticad, upload.single("avatar"), usersAvatarController.update)

module.exports = usersRouter