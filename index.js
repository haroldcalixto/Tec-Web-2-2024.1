const express = require("express");
const app = express();

app.get("/", function(requisição, resposta){
    resposta.send("Bem Vindo Inácio!");

})

app.get("blog", function(req, res){
    res.send("Bem vindo ao meu blog!");
})

app.get("/canal/youtube", function(req, res){
    res.send("Bem vindo ao meu canal");
})

app.get("/ola/:nome", function(req, res){
    res.send(req.params.nome);
})

app.get("/ola/:nome", function(req, res){
    var nome = req.params.nome;
    res.send("<h1>Inácio" + nome + "</h1>");
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})