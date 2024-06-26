const { Router } = require('express') // 
const Curso = require('../models/Curso')
const { auth } = require('../middleware/auth')
const cursoRoutes = new Router()

//EXERCICIO 01 - POST - Rota de Cadastro de Curso
cursoRoutes.post('/', auth, async (req, res) => {
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

//EXERCICIO 02 - ROTA (GET) DE LISTAGEM DE CURSOS
cursoRoutes.get('/', auth, async (req,res) => {
    try {
        const curso = await Curso.findAll()
        res.json(curso)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'não foi possivel encontrar cursos'})         
    }
    
})

// EXERCICIO 03 - PESQUISA UM CURSO - RECURSO QUERY
cursoRoutes.get('/', auth, async (req,res) => {
    try {
        let params = {}

        if(req.query.nome)  {
            params = {...params, nome: req.query.nome}
        }

        if(req.query.duracao_horas)  {
            params = {...params, duracao_horas: req.query.duracao_horas}
        }
    
        const cursos = await Curso.findAll({
            where: params
        })
      res.json(cursos)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível listar todos os cursos' })
    }
})

// EXERCICIO 04 - PUT - ATUALIZACOES DE CURSOS
cursoRoutes.put('/:id', auth, async (req, res) => {
    try {
        const { id } = req.params

        const curso = await Curso.findByPk(id)
    
        if(!curso) {
            return res.status(404).json({mensagem: 'Curso não encontrado'})
        }
    
        curso.update(req.body)
    
        await curso.save()
    
        res.json(curso)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível atualizar o curso' })        
    }
    
})
//EXERCICIO 05 - ROTA DELEÇÃO DE CURSO
cursoRoutes.delete('/:id', auth, async (req,res) => {
    try {
        const id =  req.params.id
        const curso = await Curso.findByPk(id)
  
        if(!curso) {
            return res.status(404).json({mensagem: 'Curso não encontrado'})
        }   

        Curso.destroy({
            where: {
                id: id
            }
        })
        res.status(204).json({message:'Curso excluido com sucesso'})   

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível localizar o curso' })     
    }
    
})
module.exports = cursoRoutes;