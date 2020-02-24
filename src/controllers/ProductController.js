
// controler do Box
const Product = require('../models/Product');

class ProductController{
    async store(req, res){
        // cria uma novo produto no MongoDB utilizando o Schema(Tabela) Product
        const product = await Product.create({
            codigo: req.body.codigo,
            nome: req.body.nome,
            derivacao: req.body.derivacao, 
            imagem_url: req.body.url,
            saldo: req.body.saldo 
            }); 

        // retorna a requisião com um produto utilizando json 
        return res.json(product);
    };
    async show(req, res){

        const products = await Product.find({ codigo: req.params.id});

        return res.json(products);
    }
}

module.exports = new ProductController();