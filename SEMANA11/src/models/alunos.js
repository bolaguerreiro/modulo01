const { DataTypes } = require('sequelize')
const {connection} = require('../db/connection')

const Aluno = connection.define('alunos', {
    nome: {
        type: DataTypes.STRING
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    celular: {
        type: DataTypes.STRING
    }
})

module.exports = Aluno