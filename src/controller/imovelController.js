const router = require('express').Router();
const imovelService = require('../services/imovelService');
const responseObj = require('../config/response');
const { address } = require('../models/');

// all routes bellow have the prefix /user - keep that in mind when adding/editin routes.
module.exports = {

    async findAll(req, res) {
        const imoveis = await imovelService.findAll();
        const response = responseObj.success;
        response.data = imoveis;
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
    async update(req, res){
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
        var pesquisa = req.body
        var imoveisEncontrados = []
        var imoveis = await imovelService.findPesquisa(pesquisa);
        for(i = 0; i < imoveis.length; i++) {
            if(req.body.tipo) {
                if(imoveis[i].dataValues.addressTypeId == req.body.tipo) {
                    if(!imoveisEncontrados.includes(imoveis[i])) {
                        imoveisEncontrados.push(imoveis[i])
                    }
                }
            }
            if(req.body.avaliacao) {
                var avaliacaoTotal = 
                ((  parseFloat(imoveis[i].dataValues.product.rating.limpeza) + 
                    parseFloat(imoveis[i].dataValues.product.rating.comunicacao) + 
                    parseFloat(imoveis[i].dataValues.product.rating.checkin) + 
                    parseFloat(imoveis[i].dataValues.product.rating.precisao) + 
                    parseFloat(imoveis[i].dataValues.product.rating.localizacao) + 
                    parseFloat(imoveis[i].dataValues.product.rating.valor))/6)
                    /parseFloat(imoveis[i].dataValues.product.rating.qtdAvaliacoes)
                
                if(avaliacaoTotal >= req.body.avaliacao) {
                    if(!imoveisEncontrados.includes(imoveis[i])) {
                        imoveisEncontrados.push(imoveis[i])
                    }
                }
            }
            if(req.body.max) {
                var valorTotal = (imoveis[i].dataValues.product.aluguel + imoveis[i].dataValues.product.condo + imoveis[i].dataValues.product.iptu)
                if(valorTotal <= req.body.max) {
                    if(!imoveisEncontrados.includes(imoveis[i])) {
                        imoveisEncontrados.push(imoveis[i])
                    }
                }
            }
        }

        const response = responseObj.success;
console.log(req.body.avaliacao)
console.log(req.body.tipo)
console.log(req.body.max)
        if(req.body.avaliacao == "" && req.body.tipo == undefined && req.body.max == ""){
            response.data = imoveis;
        } else {
            response.data = imoveisEncontrados;
        }
        console.log(response.data)
        
        res.json(response);
    },
}