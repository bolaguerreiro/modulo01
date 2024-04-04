const PORT = 3000;

const express = require("express");

const app = express();

app.use(express.json());

app.get("/",function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})
  app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
  });