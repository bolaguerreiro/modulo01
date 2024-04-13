const express = require('express');
const app = express();
const PORT = 3333;

app.use(express.json()); // Middleware para fazer o parsing do corpo da requisição em JSON

const produtos = []; //SIMULA BD

// Middleware para registrar o horário de cada solicitação recebida
const logValidarDados = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(
      `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
      );
    next(); // Chamar next() para passar a solicitação para o próximo middleware
  };

  // MIddleware para validar dados
  const validacaoDados = (req, res, next) => {
    const { nomeProduto, preco, descricao } = req.body;
    if (!nomeProduto || !preco || !descricao) {
      return res.status(400).json({ mensagem: 'Campos obrigatórios ausentes.' });
    }
    // Se todos os campos estiverem presentes, continue para a próxima rota.
    next();
  };

// Incluir produtos no Banco de dados
app.post("/cadastra_produtos", validacaoDados, logValidarDados, (req, res) => {
    const { id, nomeProduto, preco, descricao } = req.body;
// Validacao dos dados recebidos
    if (!nomeProduto || !preco || !descricao) {
        return res.status(400).json({ mensagem: 'Dados incompletos. Certifique-se de fornecer nome, preço e descrição.' });
    }    
    const produto = { id, nomeProduto, preco, descricao }; // Criação do objeto de produtos
    produto.id = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1; 
    produtos.push(produto); // Adiciona o usuário ao array
    res.status(201).send("Produto adicionado com sucesso.");
});

// Listar todos os produtos do Banco de Dados
app.get("/produtos", (req, res) => {
    res.json(produtos);
});

//Atualizar um determinado Produto
app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const atualizaProduto = req.body;
    const index = produtos.findIndex(produtos => produtos.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Produtos não encontrado.');
        return;
    }
    produtos[index] = { ...produtos[index], ...atualizaProduto }; // Atualiza os dados do usuário
    res.status(200).send('Produto atualizado com sucesso.');
});

// Rota para obter um produto por ID
app.get('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const atualizaProduto = produtos.find(atualizaProduto => atualizaProduto.id === parseInt(id));
    if (!atualizaProduto) {
        res.status(404).send('Produto não encontrado.');
        return;
    }
    res.json(atualizaProduto);
});

// Rota para deletar uma pessoa por ID
app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(produto => produto.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Produto não encontrado.');
        return;
    }
    produtos.splice(index, 1);
    res.status(200).send('Produto excluído com sucesso.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
