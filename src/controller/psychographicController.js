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

    async findUsers(req, res) {
        // console.log('aqui', req)
        var userId = 2;
        var caracteristicasUser = []
        var usersSemelhantes = []
        if (userId) {
            var userFound = await psychographicService.findCaracteristicasUser(userId);
            var users = await psychographicService.findAllUsers();

            for (i = 0; i < userFound.dataValues.caracteristicas.length; i++) {
                caracteristicasUser.push(userFound.dataValues.caracteristicas[i].dataValues.caracteristicas_user.dataValues.psychographicItemId)
            }
            // COLOCAR A PARTE DE LOCALIZAÇÃO AQUI

            for (i = 0; i < users.length; i++) {
                for (j = 0; j < users[i].dataValues.caracteristicas.length; j++) {
                    // Verificar se é o próprio usuário e se a caracteristica é a mesma pra 
                    if (users[i].dataValues.caracteristicas[j].dataValues.id != userId && users[i].dataValues.caracteristicas[j].dataValues.caracteristicas_user.psychographicItemId == caracteristicasUser[i]) {
                        if (caracteristicasUser[i] <= 3) {
                            if (users[i].dataValues.caracteristicas[j].dataValues.gender == 'F' && caracteristicasUser[i] == 1) {
                                if (!usersSemelhantes.includes(users[i].dataValues.caracteristicas[j].dataValues)) {
                                    usersSemelhantes.push(users[i].dataValues.caracteristicas[j].dataValues)
                                }
                            } else if (users[i].dataValues.caracteristicas[j].dataValues.gender == 'M' && caracteristicasUser[i] == 2) {
                                if (!usersSemelhantes.includes(users[i].dataValues.caracteristicas[j].dataValues)) {
                                    usersSemelhantes.push(users[i].dataValues.caracteristicas[j].dataValues)
                                }
                            } else if (users[i].dataValues.caracteristicas[j].dataValues.gender == 'O' && caracteristicasUser[i] == 3) {
                                if (!usersSemelhantes.includes(users[i].dataValues.caracteristicas[j].dataValues)) {
                                    usersSemelhantes.push(users[i].dataValues.caracteristicas[j].dataValues)
                                }
                            }
                        } else {
                            usersSemelhantes.push(users[i].dataValues.caracteristicas[j].dataValues)
                        }
                    }
                    // }

                }
            }

            const response = responseObj.success;
            if (!userFound) {
                response.data = null;
                response.message = `user with id ${userId} was not found`;
            } else {
                response.data = usersSemelhantes
            }
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "field <id> was not found on the request";
            res.status(400).json(response);
        }
    }
}