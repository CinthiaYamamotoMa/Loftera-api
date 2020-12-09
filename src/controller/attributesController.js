const router = require('express').Router();
const attributeService = require('../services/attributeService');
const responseObj = require('../config/response');
const imovelService = require('../services/imovelService');

module.exports = {

    async findAll(req, res) {
        const comodidades = await attributeService.findAll();
        const response = responseObj.success;
        response.data = comodidades;
        res.json(response);
    },

    async storeAttributeProduct(req, res) {
        var comodidades = req.body.comodidades;
        var productId = req.body.productId;

        var imovel = await imovelService.findOneById(productId);

        for (i = 0; i < comodidades.length; i++) {
            var comodidade = await attributeService.findById(comodidades[i])
            await imovel.product.addComodidade(comodidade)
        }

        const response = responseObj.success;
        res.status(200).json(response);
    },

}