const mongoose = require('mongoose');

// definir Schema(tabela) no MongoDB para guardar Box's
const Product = new mongoose.Schema({
    codigo:{
        type: String,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
     derivacao:{
       type: String,
       required: true,
     },
    imagem_url:{
        type: String,
        required: true,
    },
    saldo:{
      type: Number,
      required: true,
    }
}, 
{
   timestamps:true,
   toObjeect: {virtuals: true},
   toJSON: {virtuals: true}

});
/*
File.virtual("url").get(function(){
    const url = process.env.URL || 'http://localhost:3333';
    return `${url}/files/${encodeURIComponent(this.path)}`;
})

*/

module.exports = mongoose.model('Product', Product);