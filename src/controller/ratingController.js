const router = require('express').Router();
const userService = require('../services/userService');
const responseObj = require('../config/response');
const { address, user } = require('../models');
const ratingService = require('../services/ratingService');

module.exports = {

    async update(req, res) {
        const avaliacao = req.body;

        if (avaliacao) {
            const product = await ratingService.update(avaliacao);
            console.log(product)

            const response = responseObj.success;
            response.data = product;
            res.json(response);
        } else {
            const response = responseObj.fail;
            let message = "";
            if (!avaliacao) {
                message = " user object was not found on request body; ";
            }
            res.status(400).json(response);
        }
    },

}