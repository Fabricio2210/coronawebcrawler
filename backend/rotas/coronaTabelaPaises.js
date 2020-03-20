const router = require('express').Router();
const PaisesData = require('../db/schemas/tabelaPaisesSchema');

router.get('/paises',(req,res)=>{
    PaisesData.findOne({Div:'main_table_countries_today'})
    .then((data)=>{
        res.status(200).json({
            data:data.InfoPaises
         })
        
    })
    .catch((erro)=>{
        res.status(500).json({
            msg:'Erro no servidor'
        })
    });
});

module.exports = router 