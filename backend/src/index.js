const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
métodos http
get: buscar info do backend
post: criar uma info no backend
put: alterar info no backend
delete: deleta info do backend
*/
/*
tipos de parâmetros

-query params:  parâmetros nomeados enviados na rota após o símbolo "?"
servem para filtros,paginação

-route params:  parâmetros usados para identificar recursos

request body:   corpo da requisição usado para criar ou alterar recursos
*/

/*
query builder: 
*/

app.listen(3333);