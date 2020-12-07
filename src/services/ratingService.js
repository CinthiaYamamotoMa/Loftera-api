const { user,
    product,
    ratings,
    attributes } = require('../models/');

module.exports = {

    async update(avaliacao) {
        const avaliacaoProduto = await ratings.findByPk(avaliacao.productId)

        avaliacaoProduto.limpeza = parseInt(avaliacaoProduto.limpeza) + parseInt(avaliacao.limpeza)
        avaliacaoProduto.comunicacao = parseInt(avaliacaoProduto.comunicacao) + parseInt(avaliacao.comunicacao)
        avaliacaoProduto.checkin = parseInt(avaliacaoProduto.checkin) + parseInt(avaliacao.checkin)
        avaliacaoProduto.precisao = parseInt(avaliacaoProduto.precisao) + parseInt(avaliacao.precisao)
        avaliacaoProduto.localizacao = parseInt(avaliacaoProduto.localizacao) + parseInt(avaliacao.localizacao)
        avaliacaoProduto.valor = parseInt(avaliacaoProduto.valor) + parseInt(avaliacao.valor)
        avaliacaoProduto.qtdAvaliacoes++

        await avaliacaoProduto.save();
        return avaliacaoProduto;

    },

    async store(avaliacaoNova) {
        console.log(avaliacaoNova)
        const createdRating = await ratings.create(avaliacaoNova);
        console.log(createdRating)

    return avaliacaoNova;
},
}