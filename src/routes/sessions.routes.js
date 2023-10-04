const { Router } = require("express")

const SessionsCntroller = require("../controllers/SessionsController")

const sessionsController =  new SessionsCntroller()

const sessionsRoutes = Router()

sessionsRoutes.post("/", sessionsController.create)

module.exports = sessionsRoutes;