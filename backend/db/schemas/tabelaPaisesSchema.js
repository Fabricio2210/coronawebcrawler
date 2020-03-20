const mongoose = require('mongoose');

const PaisesDataSchema = mongoose.Schema({
    Div:{
      type: String,
      required: true, 
    },
    InfoPaises:{
      type: []
    }
})
module.exports = mongoose.model('PaisesData',PaisesDataSchema)