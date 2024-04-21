const { Router } = require('express') // 
const Aluno = require('../models/Aluno')
const Curso = require('../models/Curso')
const Professor = require('../models/Professores')

const routes = new Router()

routes.get('/', async (req, res) => {
    res.send('api rodando!'); 
});

//EXERCICIO 01 - POST - Rota de Cadastro de Curso
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

//EXERCICIO 02 - ROTA (GET) DE LISTAGEM DE CURSOS
routes.get('/cursos', async (req,res) => {
    try {
        const curso = await Curso.findAll()
        res.json(curso)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'não foi possivel encontrar cursos'})         
    }
    
})

// EXERCICIO 03 - PESQUISA UM CURSO - RECURSO QUERY
routes.get('/cursos', async (req,res) => {
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
routes.put('/cursos/:id', async (req, res) => {
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
routes.delete('/cursos/:id', async (req,res) => {
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
//-------------------- EXERCICIO 06 - CRUD PROFESSORES --------------------

//POST - Rota de Cadastro de Professores
routes.post('/professores', async (req, res) => {
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
routes.get('/professores', async (req,res) => {
    try {
        const professor = await Professor.findAll()
        res.json(professor)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'não foi possivel encontrar Professores'})         
    }
    
})

// ROTA GET - PESQUISA UM DETERMINADO PROFESSOR - RECURSO QUERY
routes.get('/professor', async (req,res) => {
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
routes.put('/professores/:id', async (req, res) => {
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
routes.delete('/professores/:id', async (req,res) => {
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

module.exports = routes;
