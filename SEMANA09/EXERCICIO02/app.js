const express = require("express")

const app = express()

app.use(express.json())

app.get("/sobre",function(req, res){
    res.send("Meu projeto será sobre viagens")
})

app.get("/contato",function(req, res){
    res.send("contato: Ricardo, email: email@email.com")
})

app.listen(3000)
console.log("Servidor Ligado")