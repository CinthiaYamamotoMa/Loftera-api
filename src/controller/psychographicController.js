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
        var userId = req.query.id;

        var caracteristicasId_User = []
        var usersSemelhantes = []
        var usersSemelhantesId = []

        if (userId) {
            var userFound = await psychographicService.findCaracteristicasUser(userId);
            var caracteristicas = await psychographicService.findAllUsers();

            for (i = 0; i < userFound.dataValues.caracteristicas.length; i++) {
                caracteristicasId_User.push(userFound.dataValues.caracteristicas[i].dataValues.caracteristicas_user.dataValues.psychographicItemId)
            }


            // COLOCAR A PARTE DE LOCALIZAÇÃO AQUI

            // for (i = 0; i < caracteristicas.length; i++) {
            //     for (j = 0; j < caracteristicas[i].dataValues.caracteristicas.length; j++) {
            //         // Verificar se é o próprio usuário e se a caracteristica é a mesma pra 
            //         if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.id != userId && caracteristicas[i].dataValues.caracteristicas[j].dataValues.caracteristicas_user.psychographicItemId == caracteristicasId_User[i]) {
            //             if (caracteristicasId_User[i] <= 3) {
            //                 if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.gender == 'F' && caracteristicasId_User[i] == 1) {
            //                     if (!usersSemelhantes.includes(caracteristicas[i].dataValues.caracteristicas[j].dataValues)) {
            //                         usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
            //                     }
            //                 } else if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.gender == 'M' && caracteristicasId_User[i] == 2) {
            //                     if (!usersSemelhantes.includes(caracteristicas[i].dataValues.caracteristicas[j].dataValues)) {
            //                         usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
            //                     }
            //                 } else if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.gender == 'O' && caracteristicasId_User[i] == 3) {
            //                     if (!usersSemelhantes.includes(caracteristicas[i].dataValues.caracteristicas[j].dataValues)) {
            //                         usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
            //                     }
            //                 }
            //             } else {
            //                 usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
            //             }
            //         }
            //         // }

            //     }
            // }

            if (userFound.faculdade != null) {
                for (cont = 0; cont < caracteristicasId_User.length; cont++) {
                    for (i = 0; i < caracteristicas.length; i++) {
                        // if(caracteristicasId_User[cont] == caracteristicas[i].id){
                        for (j = 0; j < caracteristicas[i].dataValues.caracteristicas.length; j++) {
                            if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.id != userId) {
                                if (caracteristicasId_User[cont] == 1) {
                                    if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.gender == 'F') {
                                        if (usersSemelhantesId.indexOf(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id) == -1) {
                                            if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade != null) {
                                                await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade.latitude},${caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade.longitude}&destinations=${userFound.faculdade.latitude},${userFound.faculdades.longitude}&key=AIzaSyAajnzIlUy_7lAOHZe9PyC3RFX80lqC2fE`)
                                                    .then(response => {
                                                        if (10 >= parseInt(response.data.rows[0].elements[0].distance.value)) {
                                                            usersSemelhantesId.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id)
                                                            usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
                                                        }

                                                    })
                                            }
                                        }
                                    }
                                } else if (caracteristicasId_User[cont] == 2) {
                                    if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.gender == 'M') {
                                        if (usersSemelhantesId.indexOf(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id) == -1) {
                                            if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade != null) {
                                                await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade.latitude},${caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade.longitude}&destinations=${userFound.faculdade.latitude},${userFound.faculdades.longitude}&key=AIzaSyAajnzIlUy_7lAOHZe9PyC3RFX80lqC2fE`)
                                                    .then(response => {
                                                        if (10 >= parseInt(response.data.rows[0].elements[0].distance.value)) {
                                                            usersSemelhantesId.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id)
                                                            usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
                                                        }

                                                    })
                                            }
                                        }
                                    }
                                } else if (caracteristicasId_User[cont] == 3) {
                                    if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.gender == 'O') {
                                        if (usersSemelhantesId.indexOf(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id) == -1) {
                                            if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade != null) {
                                                await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade.latitude},${caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade.longitude}&destinations=${userFound.faculdade.latitude},${userFound.faculdades.longitude}&key=AIzaSyAajnzIlUy_7lAOHZe9PyC3RFX80lqC2fE`)
                                                    .then(response => {
                                                        if (10 >= parseInt(response.data.rows[0].elements[0].distance.value)) {
                                                            usersSemelhantesId.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id)
                                                            usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
                                                        }

                                                    })
                                            }
                                        }
                                    }
                                } else {
                                    if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.caracteristicas_user.psychographicItemId == caracteristicasId_User[cont]) {
                                        if (usersSemelhantesId.indexOf(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id) == -1) {
                                            if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade != null) {
                                                await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade.latitude},${caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade.longitude}&destinations=${userFound.faculdade.latitude},${userFound.faculdades.longitude}&key=AIzaSyAajnzIlUy_7lAOHZe9PyC3RFX80lqC2fE`)
                                                    .then(response => {
                                                        if (10 >= parseInt(response.data.rows[0].elements[0].distance.value)) {
                                                            usersSemelhantesId.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id)
                                                            usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
                                                        }

                                                    })
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        // }

                    }
                }
            } else {
                for (cont = 0; cont < caracteristicasId_User.length; cont++) {
                    for (i = 0; i < caracteristicas.length; i++) {
                        // if(caracteristicasId_User[cont] == caracteristicas[i].id){
                        for (j = 0; j < caracteristicas[i].dataValues.caracteristicas.length; j++) {
                            if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.id != userId) {
                                if (caracteristicasId_User[cont] == 1) {
                                    if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.gender == 'F') {
                                        if (usersSemelhantesId.indexOf(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id) == -1) {
                                            usersSemelhantesId.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id)
                                            if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.faculdade != null) {

                                            }
                                            usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
                                        }
                                    }
                                } else if (caracteristicasId_User[cont] == 2) {
                                    if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.gender == 'M') {

                                        if (usersSemelhantesId.indexOf(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id) == -1) {
                                            usersSemelhantesId.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id)
                                            usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
                                        }
                                    }
                                } else if (caracteristicasId_User[cont] == 3) {
                                    if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.gender == 'O') {

                                        if (usersSemelhantesId.indexOf(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id) == -1) {
                                            usersSemelhantesId.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id)
                                            usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
                                        }
                                    }
                                } else {
                                    if (caracteristicas[i].dataValues.caracteristicas[j].dataValues.caracteristicas_user.psychographicItemId == caracteristicasId_User[cont]) {
                                        if (usersSemelhantesId.indexOf(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id) == -1) {
                                            console.log('ENTROU')
                                            usersSemelhantesId.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues.id)
                                            usersSemelhantes.push(caracteristicas[i].dataValues.caracteristicas[j].dataValues)
                                        }
                                    }
                                }
                            }
                        }
                        // }

                    }
                }
            }



            // console.log(usersSemelhantes)

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