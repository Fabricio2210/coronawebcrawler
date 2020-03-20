const router = require('express').Router();
const moment = require('moment');
const NoticiasData = require('../db/schemas/NoticiasSchema')

router.get('/noticias',(req,res)=>{
    NoticiasData.findOne({Div:`#newsdate${moment().format('YYYY-MM-DD')}`})
    .then((data)=>{
        res.status(200).json({
            data:data.InfoNoticias
         })
        
    })
    .catch((erro)=>{
        res.status(500).json({
            msg:'Erro no servidor'
        })
    });
});

module.exports = router 