const
    {
        address,
        product,
        ratings,
        attributes,
        user,
        rules,
        image,
        comments
    } = require('../models/');

const axios = require('axios').default;

const { Op, Sequelize, sequelize } = require("sequelize");
const { findAllByUserId } = require('../controller/imovelController');

module.exports = {

    async findById(id) {
        const userresponse = await product.findByPk(id);
        return userresponse;
    },

    async storeProductImage(imagem) {
        // const productImage = await image.create();
        // productImage.name = filename;
        // productImage.deleted = false;
        
        const productImage = await image.create(imagem);

        // await productImage.save();
        return productImage;
    },

    async findAll() {
        const imoveis = await address.findAll({
            where: {
                deleted: false,
                avaliable: true
            },
            include: [{
                model: product,
                include: [
                    {
                        model: ratings,
                    },
                    {
                        model: attributes,
                        as: 'comodidade'
                    },
                    {
                        model: rules,
                        as: 'regra'
                    },
                ]
            }]
        });
        return imoveis;
    },

    async findAllByUserId(id) {
        const imoveis = await user.findOne({
            where: {
                deleted: false,
                id: id
            },
            include: [
                {
                    model: product,
                    include: [
                        {
                            model: ratings,
                        },
                        {
                            model: attributes,
                            as: 'comodidade'
                        },
                        {
                            model: rules,
                            as: 'regra'
                        },
                    ]
                },
            ]
        });
        return imoveis;
    },

    async findPesquisa(pesquisa) {
        console.log(pesquisa)
        const imoveis = await address.findAll({
            where: {
                deleted: false,
                avaliable: true,
                [Op.or]: [
                    { street: pesquisa.local },
                    { district: pesquisa.local },
                    { city: pesquisa.local },
                ]
            },
            include: [{
                model: product,
                include: [
                    {
                        model: ratings,
                    },
                    {
                        model: attributes,
                        as: 'comodidade'
                    },
                    {
                        model: rules,
                        as: 'regra'
                    },
                ]
            }]
        });
        return imoveis;
    },

    async findOneById(id) {
        const imovel = await address.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: product,
                    include: [
                        {
                            model: user,
                            include: [
                                { model: image }
                            ]
                        },
                        {
                            model: user,
                            as: 'interessados',
                            required: false,
                            include: [{
                                model: image
                            }]
                        },
                        { model: ratings, },
                        {
                            model: attributes,
                            as: 'comodidade'
                        },
                        {
                            model: rules,
                            as: 'regra'
                        },
                        {
                            model: comments,
                            include: [
                                {
                                    
                                    model: user,
                                    include: [
                                        { model: image }
                                    ]
                                }
                            ]
                        },
                    ]

                },
            ]
        });
        return imovel;
    },

    async findByPk(id) {
        const imovel = await product.findOne({
            raw: true,
            where: {
                id: id,
            },
        });
        return imovel;
    },

    async storeUser(imovelNovo) {
        console.log(imovelNovo)
        imovelNovo.createdAt = new Date();
        imovelNovo.updatedAt = new Date();
        const createdImovel = await product.create(imovelNovo);
        console.log(imovelNovo)

        return createdImovel;
    },

    async storeAddress(enderecoNovo) {
        let resposta = new Object();
        await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${enderecoNovo.cep}&key=AIzaSyAajnzIlUy_7lAOHZe9PyC3RFX80lqC2fE`)
            .then(response => {
                console.log(response),
                    resposta = response.data.results[0].geometry.location;
            });
        console.log(enderecoNovo);
        enderecoNovo.createdAt = new Date();
        enderecoNovo.updatedAt = new Date();
        enderecoNovo.latitude = resposta.lat;
        enderecoNovo.longitude = resposta.lng;
        const createdEndereco = await address.create(enderecoNovo);

        console.log(enderecoNovo)

        return enderecoNovo;
    },

    async updateUser(userReceived, id) {
        const userresponse = await address.findByPk(id);

        // userresponse.name = userReceived.name;
        // userresponse.email = userReceived.email;
        // userresponse.password = userReceived.password;
        // userresponse.cpf = userReceived.cpf;
        // userresponse.cellPhone = userReceived.cellPhone;
        // userresponse.gender = userReceived.gender;
        // userresponse.description = userReceived.description;

        await userresponse.save();

        return userresponse;
    },

    async delete(id) {
        const imovel = await address.findByPk(id);
        if (imovel) {
            imovel.deleted = true;
            await imovel.save();
        }
        return imovel;
    },

    async updateAvaliable(avaliable) {
        const avaliacaoProduto = await address.findOne({
            where: {
                productId: avaliable.productId
            }
        })

        if (avaliacaoProduto.avaliable) {
            avaliacaoProduto.avaliable = false
        } else {
            avaliacaoProduto.avaliable = true
        }

        await avaliacaoProduto.save();
        return avaliacaoProduto;

    },

}