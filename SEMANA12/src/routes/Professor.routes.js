const { Router } = require('express') // 
const Professor = require('../models/professor')
const professorRoutes = new Router()

//-------------------- EXERCICIO 06 - CRUD PROFESSORES --------------------

//POST - Rota de Cadastro de Professores
professorRoutes.post('/', async (req, res) => {
    try {
        const nome = req.body.nome
        const disciplina = req.body.disciplina

        if(!nome) {
            return res.status(400).json({messagem: "O nome do professor é obrigatório" })
        }

        if(!disciplina) {
            return res.status(400).json({  messagem: "Professor deve ter uma disciplina"
            })
        }
        const professor = await Professor.create({
            nome: nome,
            disciplina: disciplina,
        })  

        res.status(201).json(professor)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'não foi possivel cadastrar o curso'})    
    }

})

//ROTA GET -LISTAGEM DE PROFESSORES
professorRoutes.get('/', async (req,res) => {
    try {
        const professor = await Professor.findAll()
        res.json(professor)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'não foi possivel encontrar Professores'})         
    }
    
})

// ROTA GET - PESQUISA UM DETERMINADO PROFESSOR - RECURSO QUERY
professorRoutes.get('/', async (req,res) => {
    try {
        let params = {}

        if(req.query.nome)  {
            params = {...params, nome: req.query.nome}
        }

        if(req.query.disciplina)  {
            params = {...params, disciplina:req.query.disciplina}
        }
    
        const professor = await Professor.findAll({
            where: params
        })
      res.json(professor)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível listar o professor solicitado' })
    }
})

// ROTA PUT - ATUALIZACOES DE PROFESSORES
professorRoutes.put('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const professor = await Professor.findByPk(id)
    
        if(!professor) {
            return res.status(404).json({mensagem: 'Professor não encontrado'})
        }
    
        professor.update(req.body)
    
        await professor.save()
    
        res.json(professor)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível atualizar o Cadastro de Professores' })        
    }
    
})

//ROTA DELETE - EXCLUSÃO DE UM PROFESSOR
professorRoutes.delete('/:id', async (req,res) => {
    try {
        const id =  req.params.id
        const professor = await Professor.findByPk(id)
  
        if(!professor) {
            return res.status(404).json({mensagem: 'Professor não encontrado'})
        }   

        Professor.destroy({
            where: {
                id: id
            }
        })
        res.status(204).json({message:'Cadastro do Professor excluido com sucesso'})  
         

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível localizar este Professor' })     
    }
    
})

module.exports = professorRoutes;