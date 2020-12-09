const router = require('express').Router();
const ruleService = require('../services/ruleService');
const userService = require('../services/userService');
const responseObj = require('../config/response');
const { Rules } = require('../models/');
const imovelService = require('../services/imovelService');

module.exports = {

    async findAll(req, res) {
        const regras = await ruleService.findAll();
        const response = responseObj.success;
        response.data = regras;
        res.json(response);
    },

    async storeRuleProduct(req, res) {
        var regras = req.body.regras;
        var productId = req.body.productId;

        var imovel = await imovelService.findOneById(productId);

        for (i = 0; i < regras.length; i++) {
            var regra = await ruleService.findById(regras[i]);
            await imovel.product.addRegra(regra);
        }

        const response = responseObj.success;
        res.status(200).json(response);
    },

}