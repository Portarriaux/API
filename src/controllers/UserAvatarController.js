const knex = require("../database/knex");
const AppError = require("../utils/App.Error")
const DiskStorage = require("../providers/DiskStorage")

class UserAvatarController {
  async update(request, response) {
    const user_id = request.user.id;
    const avatarFilname = request.file.filename;


    const diskStorage = new DiskStorage()

    const user = await knex("users").where({ id: user_id}).first()

    if(!user) {
        throw new AppError("Você precisa estar autenticado para atualizar foto de perfil.", 401)
    }

    if(user.avatar) {
        await diskStorage.deleteFile(user.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFilname)

    await knex("users").update(user).where({ id: user_id})

    user.avatar = filename

    return response.json(user)
  }
}

module.exports = UserAvatarController
