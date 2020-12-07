const router = require('express').Router();
const attributeService = require('../services/attributeService');
const responseObj = require('../config/response');

module.exports = {

    async findAll(req, res) {
        const comodidades = await attributeService.findAll();
        const response = responseObj.success;
        response.data = comodidades;
        res.json(response);
    },

    async storeRuleProduct(req, res) {
        var comodidades = req.body["comodidades[]"]
        var userId = req.body.userId

        var user = await userService.findOneById(userId);

        var i
        for (i = 0; i < comodidades.length; i++) {
            // var regra = await attributeService.findById(caracteristicas[i])
            // await user.addProduct_attributes(regra)
        }

        const response = responseObj.success;
        res.status(200).json(response);
    },

}