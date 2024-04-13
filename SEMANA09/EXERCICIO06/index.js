const express = require('express');
const app = express();
const PORT = 3333;

app.use(express.json()); // Middleware para fazer o parsing do corpo da requisição em JSON

let users = [];

app.post("/users", (req, res) => {
    const { nome, email, data_cadastro } = req.body;
    const user = { nome, email, data_cadastro }; // Criação do objeto de usuário
    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Atribuição do ID
    users.push(user); // Adiciona o usuário ao array
    res.status(201).send("Usuário adicionado com sucesso.");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const usuario = users.find((usuario) => usuario.id === parseInt(id));
    if (!usuario) {
        res.status(404).send('Usuário não encontrado.');
        return;
    }
    res.json(usuario);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const index = users.findIndex(usuario => usuario.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Usuário não encontrado.');
        return;
    }
    users[index] = { ...users[index], ...newData }; // Atualiza os dados do usuário
    res.status(200).send('Usuário atualizado com sucesso.');
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Usuário não encontrado.');
        return;
    }
    users.splice(index, 1);
    res.status(200).send('Usuário deletado com sucesso.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
