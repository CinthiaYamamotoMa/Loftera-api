const router = require('express').Router();
const imovelService = require('../services/imovelService');
const responseObj = require('../config/response');
const { address } = require('../models/');
const axios = require('axios').default;

// all routes bellow have the prefix /user - keep that in mind when adding/editin routes.
module.exports = {

    async storeEndereco(req, res){
            const receivedUser = req.body;
            if (receivedUser) {
                const createdUser = await imovelService.storeAddress(receivedUser);
                const response = responseObj.success;
                response.data = createdUser;
                res.json(response);
            } else {
                const response = responseObj.fail;
                response.message = "user object was not found on request body";
                res.status(400).json(response);
            }

    },

    async findAll(req, res) {
        const imoveis = await imovelService.findAll();
        const response = responseObj.success;
        response.data = imoveis;
        res.json(response);
    },

    async findAllByUserId(req, res) {
        const userId = req.query.userId;
        const imoveis = await imovelService.findAllByUserId(userId);
        const response = responseObj.success;
        response.data = imoveis.products;
        res.json(response);
    },

    async findOneById(req, res) {
        const userId = req.query.id;
        if (userId) {
            const userFound = await imovelService.findOneById(userId);
            const response = responseObj.success;
            if (!address) {
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
    async store(req, res) {
        const receivedUser = req.body;
        if (receivedUser) {
            const createdUser = await imovelService.storeUser(receivedUser);
            const response = responseObj.success;
            response.data = createdUser;
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "user object was not found on request body";
            res.status(400).json(response);
        }
    },
    async update(req, res) {
        const receivedUser = req.body;
        const userId = req.params.id;

        if (receivedUser && userId) {
            const updatedUser = await imovelService.updateUser(receivedUser, userId);
            const response = responseObj.success;
            response.data = updatedUser;
            res.json(response);
        } else {
            const response = responseObj.fail;
            let message = "";
            if (!receivedUser) {
                message = " user object was not found on request body; ";
            }
            if (!userId) {
                message += " userId object was not found on request params; ";
            }
            res.status(400).json(response);
        }
    },
    async delete(req, res) {
        const imovelId = req.body.productId;
        if (imovelId) {
            const deleteResponse = await imovelService.delete(imovelId);
            const response = responseObj.success;
            if (!deleteResponse) {
                response.data = null;
                response.message = `user with id ${imovelId} was not found`;
            } else {
                response.data = deleteResponse;
            }
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "field <id> was not found on the request";
            res.status(400).json(response);
        }
    },

    async updateAvaliable(req, res) {
        const avaliable = req.body;

        console.log(avaliable)

        if (avaliable) {
            const product = await imovelService.updateAvaliable(avaliable);
            console.log(product)

            const response = responseObj.success;
            response.data = product;
            res.json(response);
        } else {
            const response = responseObj.fail;
            let message = "";
            if (!avaliable) {
                message = " user object was not found on request body; ";
            }
            res.status(400).json(response);
        }
    },
    async findPesquisa(req, res) {
        console.log(req)
        var pesquisa = req.body
        var imoveisEncontrados = []

        var imoveisAll
        if (pesquisa.raio != "") {
            imoveisAll = await imovelService.findAll()
        } else {
            imoveisAll = await imovelService.findPesquisa(pesquisa);
        }
        var imoveis = []
        if (pesquisa.raio != "") {
            pesquisa.raio = pesquisa.raio * 1000

            for (i = 0; i < imoveisAll.length; i++) {
                await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${imoveisAll[i].latitude},${imoveisAll[i].longitude}&destinations=${pesquisa.coordenadas.lat},${pesquisa.coordenadas.lng}&key=AIzaSyAajnzIlUy_7lAOHZe9PyC3RFX80lqC2fE`)
                    .then(response => {
                        if (parseInt(pesquisa.raio) >= parseInt(response.data.rows[0].elements[0].distance.value))
                            imoveis.push(imoveisAll[i])
                    })
            }
        } else {
            imoveis = imoveisAll
        }

        for (i = 0; i < imoveis.length; i++) {
            if (req.body.tipo) {
                if (imoveis[i].dataValues.addressTypeId == req.body.tipo) {
                    if (!imoveisEncontrados.includes(imoveis[i])) {
                        imoveisEncontrados.push(imoveis[i])
                    }
                }
            }
            if (req.body.avaliacao) {
                var avaliacaoTotal =
                    ((parseFloat(imoveis[i].dataValues.product.rating.limpeza) +
                        parseFloat(imoveis[i].dataValues.product.rating.comunicacao) +
                        parseFloat(imoveis[i].dataValues.product.rating.checkin) +
                        parseFloat(imoveis[i].dataValues.product.rating.precisao) +
                        parseFloat(imoveis[i].dataValues.product.rating.localizacao) +
                        parseFloat(imoveis[i].dataValues.product.rating.valor)) / 6)
                    / parseFloat(imoveis[i].dataValues.product.rating.qtdAvaliacoes)

                if (avaliacaoTotal >= req.body.avaliacao) {
                    if (!imoveisEncontrados.includes(imoveis[i])) {
                        imoveisEncontrados.push(imoveis[i])
                    }
                }
            }
            if (req.body.max) {
                var valorTotal = (imoveis[i].dataValues.product.aluguel + imoveis[i].dataValues.product.condo + imoveis[i].dataValues.product.iptu)
                if (valorTotal <= req.body.max) {
                    if (!imoveisEncontrados.includes(imoveis[i])) {
                        imoveisEncontrados.push(imoveis[i])
                    }
                }
            }
        }

        console.log(imoveis)

        const response = responseObj.success;

        if (req.body.avaliacao == "" && req.body.tipo == undefined && req.body.max == "") {
            response.data = imoveis;
        } else {
            response.data = imoveisEncontrados;
        }
      
        res.json(response);
    },
}