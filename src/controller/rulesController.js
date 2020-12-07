const router = require('express').Router();
const ruleService = require('../services/ruleService');
const userService = require('../services/userService');
const responseObj = require('../config/response');
const { Rules } = require('../models/');

module.exports = {

    async findAll(req, res) {
        const regras = await ruleService.findAll();
        const response = responseObj.success;
        response.data = regras;
        res.json(response);
    },

    async storeRuleProduct(req, res) {
        var regras = req.body["regras[]"]
        var userId = req.body.userId

        var user = await userService.findOneById(userId);

        var i
        for (i = 0; i < regras.length; i++) {
            // var regra = await ruleService.findById(caracteristicas[i])
            // await user.addProduct_rules(regra)
        }

        const response = responseObj.success;
        res.status(200).json(response);
    },

}