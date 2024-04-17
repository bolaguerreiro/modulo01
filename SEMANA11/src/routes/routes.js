const { Router } = require('express') // 
const Aluno = require('../models/Aluno')
const Curso = require('../models/Curso')

const routes = new Router()

routes.get('/', async (req, res) => {
    res.send('api rodando!'); 
});

routes.post('/cursos', async (req, res) => {
    try {
        const nome = req.body.nome
        const duracao_horas = req.body.duracao_horas

        if(!nome) {
            return res.status(400).json({messagem: "O nome é obrigatório" })
        }

        if(!(duracao_horas >= 40 && duracao_horas <= 200)) {
            return res.status(400).json({  messagem: "A duração do curso deve ser entre 40 e 200 horas"
            })
        }
        const curso = await Curso.create({
            nome: nome,
            duracao_horas: duracao_horas,
        })  

        res.status(201).json(curso)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'não foi possivel cadastrar o curso'})    
    }

})

module.exports = routes;
