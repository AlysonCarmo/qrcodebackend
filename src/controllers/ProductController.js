
// controler do Box
const Product = require('../models/Product');

class ProductController{
    async store(req, res){
        // cria uma novo produto no MongoDB utilizando o Schema(Tabela) Product
        const product = await Product.create({
            codigo: req.body.codigo,
            nome: req.body.nome,
            derivacao: req.body.derivacao,
            nome_derivacao: req.body.nome_derivacao, 
            imagem_url: req.body.url,
            saldo_p: req.body.saldo_p,
            composicao: req.body.composicao,
            agrupamento: req.body.agrupamento,
            unidade_medida: req.body.unidade_medida,
            preco_atacado: req.body.preco_atacado,
            preco_corte: req.body.preco_corte,
            peca: req.body.peca,
            gramatura: req.body.gramatura,
            saldo_i: req.body.saldo_i,
            files: req.body.files,
            }); 

        // retorna a requisião com um produto utilizando json 
        return res.json(product);
    };
    async show(req, res){

        const products = await Product.find({ codigo: req.params.id});

        return res.json(products);
    }

    async aggregate(req, res){

        const filter = req.body.filter.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

        const products = await Product.aggregate([
            { $match : { $or: [{'nome' : new RegExp(filter, "i")}, {'codigo' : new RegExp(filter, "i")} ] } },
            { $group:
            {
              _id: '$codigo', // Group By Expression
              'nome':  {$first :'$nome'} ,
              'codigo':  {$first :'$codigo'} ,
              'composicao':  {$first :'$composicao'} ,
              'agrupamento':  {$first :'$agrupamento'} ,
              'files': {$first : '$files'},
              'saldo_p': { $sum : '$saldo_p' },
              'unidade_medida':  {$first :'$unidade_medida'} ,
              'preco_atacado':  {$first :'$preco_atacado'} ,
              'preco_corte':  {$first :'$preco_corte'} ,
              'peca':  {$first :'$peca'} ,
              'gramatura':  {$first :'$gramatura'} ,
              'saldo_i': { $sum : '$saldo_i' },
              count: { $sum: 1 },
            },},
            {$lookup:
            {
                from:'files',
                localField:'files',
                foreignField: '_id',
                as: 'file'
            },}
        ]);

        return res.json(products);
    }
}

module.exports = new ProductController();