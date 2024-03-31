const PORT = 3000;
const express = require("express");

const app = express();

app.use(express.json());

const logHoraMiddleware = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(
      `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
      );
    next(); // Chamar next() para passar a solicitação para o próximo middleware
  };

  app.get('/', logHoraMiddleware, (req, res) => {
    res.send('Passando log de hora para a solicitação de requisicao');
  });

  app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
  });