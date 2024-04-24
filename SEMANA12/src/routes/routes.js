const { Router } = require("express");
const cursoRoutes = require("./cursos.routes");
const professorRoutes = require("./professor.routes")
const loginRoutes = require("./login.routes");

const routes = Router()

routes.use('/cursos', cursoRoutes)
routes.use('/professor', professorRoutes)
routes.use('/login', loginRoutes)

module.exports = routes