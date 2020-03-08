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
     nome_derivacao:{
       type: String,
       required: true,
     }
    ,imagem_url:{
        type: String,
        required: true,
    },
    saldo:{
      type: Number,
      required: true,
    }, 
    composicao:{
      type: String,
      required: true, 
    },
    agrupamento:{
      type: String,
      required: true,  
    },
    files:[{type: mongoose.Schema.Types.ObjectId, ref:"File"}] // Criando o relacionamento com o Schema(Tabela) File
}, 
{
   timestamps:true,
   toObjeect: {virtuals: true},
   toJSON: {virtuals: true}

});




module.exports = mongoose.model('Product', Product);