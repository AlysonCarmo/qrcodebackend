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
    saldo_i:{
      type: Number,
      required: true,
    },
    saldo_p:{
      type: Number,
      required: true,
    },  
    composicao:{
      type: String,
      required: true, 
    },
    gramatura:{
      type: String,
      required: true, 
    },
    peca:{
      type: Number,
      required: true, 
    },
    unidade_medida:{
      type: String,
      required: true, 
    },
    preco_atacado:{
      type: Number,
      required: true,
    }, 
    preco_corte:{
      type: Number,
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