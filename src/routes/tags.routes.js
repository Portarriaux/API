const { Router } = require('express');

const TagsController = require('../controllers/TagsController'); // Importe o controlador corretamente

const tagsRouter = Router();

const tagsController = new TagsController(); // Crie uma instância do controlador

const ensureAuthenticad = require('../middlewares/ensureAuthenticad')


tagsRouter.get("/", ensureAuthenticad ,tagsController.index);

module.exports = tagsRouter;
