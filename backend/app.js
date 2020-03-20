const express = require('express');
const cors = require('cors');
const conectaDb = require('./db/conectaDb');
const taskTabelaPaises = require('./services/cronJobs/AgendaTabelaPaises')
const taskUltimaNoticias = require('./services/cronJobs/AgendaUltimasNoticias')
const path = require('path');
const app = express();
const rotaTabela = require('./rotas/coronaTabelaPaises')
const rotaNoticias = require('./rotas/coronaUltimasNoticias')
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(rotaTabela)
app.use(rotaNoticias)
conectaDb();

app.listen(port,()=>{
    console.log(`Conectado na porta ${port}`)
})