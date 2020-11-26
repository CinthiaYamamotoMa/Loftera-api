const router = require('express').Router();
const userService = require('../services/userService');
const responseObj = require('../config/response');
const { address, user } = require('../models/');
const imovelService = require('../services/imovelService');

module.exports = {

    async store(req, res) {
        const receivedUser = req.query;
        try {
            if (receivedUser) {
                const createdUser = await userService.storeInteresse(receivedUser);
                const product = await imovelService.findByPk(receivedUser.productId)

                await createdUser.addInteressados(product.id)

                res.status(200);
            } else {
                const response = responseObj.fail;
                response.message = "user object was not found on request body";
                res.status(400).json(response);
            }
        } catch (error) {
            const response = responseObj.fail;
            response.message = error.message;
            res.status(400).json(response)
        }

    },

    async findInterested(req, res) {
        const userId = req.query.userId;
        if (userId) {
            const userFound = await userService.findInterested(userId);
            const response = responseObj.success;
            if (!user) {
                response.data = null;
                response.message = `user with id ${userId} was not found`;
            } else {
                response.data = userFound;
            }
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "field <id> was not found on the request";
            res.status(400).json(response);
        }
    },

}