// O módulo express cria o servidor, sem necessidade de usar a função .createServer
const express = require('express');
const app = express();

// Criando rotas

// Rota raiz
app.get('/', function(req, res) {
    res.send({ message: "Hello World" });
});

// Rota Natalina!
app.get('/natalina', (req, res) => {
    let data = req.query; // .QUERY são os parâmetros passados na REQ através da "?"
    let message = "";

    if (data.search) {
        message = `Bora jogar ${data.search}`;
    }
 
    res.json({
        message: `Salve Natalina!!! ${message}`
    })
})

// Rota saudação com QUERY
app.get('/saudacao', (req, res) => {
    // Parâmetros de "name" passados através da QUERY (?)
    res.send(`Olá! Seja bem vindo, ${req.query.name}!`);
})

// Rota saudação com PARAMS
app.get('/saudacao/:name', (req, res) => {
    // Parâmetros de "name" passados através da QUERY (?)
    res.send(`Olá! Seja bem vindo, ${req.params.name}!`);
})

app.listen(3019);