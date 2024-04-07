const express = require('express');
const app = express();
const PORT = 3333;

// 1. Criação - Rota para adicionar um novo usuario
app.post('/users', (req, res) => {
    const usuario = req.body;
    users.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push(usuario);
    res.status(201).send('Usuario adicionada com sucesso.');
});

// Lista de usuários (simulando um "banco de dados" em memória)
let users = [];

// 2. Leitura - Rota para obter todas os usuarios
app.get('/users', (req, res) => { 
    res.json(users);
});

// Rota para obter uma pessoa por ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const usuario = users.find(users => users.id === parseInt(id));
    if (!usuario) {
        res.status(404).send('Usuario não encontrada.');
        return;
    }
    res.json(usuario);
});

// Rota para atualizar um usuario por ID
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const index = users.findIndex(usuario => users.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Usuario não encontrado.');
        return;
    }
    usuario[index] = { ...users[index], ...newData };
    res.status(200).send('Usuario atualizado com sucesso.');
});

// Rota para deletar uma pessoa por ID
app.delete('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    const index = pessoas.findIndex(pessoa => pessoa.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Pessoa não encontrada.');
        return;
    }
    pessoas.splice(index, 1);
    res.status(200).send('Pessoa deletada com sucesso.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});