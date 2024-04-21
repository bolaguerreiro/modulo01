const { Router } = require("express");
const cursoRoutes = require("/cursos.routes");
const professorRoutes = require("/professor.routes")
const loginRoutes = require("./login.route");

const routes = Router()

routes.use('/cursos', cursoRoutesRoutes)
routes.use('/professores', professorRoutes)
routes.use('/login', loginRoutes)

module.exports = routes