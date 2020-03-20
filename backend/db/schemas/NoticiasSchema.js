const mongoose = require('mongoose');

const NoticiasDataSchema = mongoose.Schema({
    Div:{
      type: String,
      required: true, 
    },
    InfoNoticias:{
      type: []
    }
})
module.exports = mongoose.model('NoticiasData',NoticiasDataSchema)