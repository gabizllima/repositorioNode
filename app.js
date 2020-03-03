// Incluindo as dependências já baixadas 
const express = require('express');
const bodyParser = require('body-parser');
//atribuindo o Express à variável app 
const app = express();

const Service =  require("./service");

//especifica a porta
app.listen(8080, () => {
    console.log('server running on port 8080');
});

//configura o middleware Body Parser pra ser utilizado com o Express e poder tratar o corpo JSON das requisições 
app.use(bodyParser.json());

//roteamento
app.post('/', (request, response) => {
    response.send(new Service().retornaCartasAleatorias(request.body));
});