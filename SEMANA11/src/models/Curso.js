const { DataTypes } = require('sequelize')
const {connection} = require('../db/connection')

const Curso = connection.define('cursos', {
    nome: {
        type: DataTypes.STRING
    },
    duracao_horas: {
        type: DataTypes.INTEGER
    }
})

module.exports = Curso