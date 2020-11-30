const router = require('express').Router();
const psychographicService = require('../services/psychographicService');
const userService = require('../services/userService');
const responseObj = require('../config/response');
const { psychographicItem } = require('../models/');

// all routes bellow have the prefix /user - keep that in mind when adding/editin routes.
module.exports = {

    async findAll(req, res) {
        const caracteristicas = await psychographicService.findAll();
        const response = responseObj.success;
        response.data = caracteristicas;
        res.json(response);
    },

    async store(req, res) {
        var caracteristicas = req.body["caracteristicas[]"]
        var userId = req.body.userId

        var user = await userService.findOneById(userId);

        var i
        for (i = 0; i < caracteristicas.length; i++) {
            var caracteristica = await psychographicService.findById(caracteristicas[i])
            await user.addCaracteristicas(caracteristica)
        }

        const response = responseObj.success;
        res.status(200).json(response);
    },
}