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

const { Op, Sequelize, sequelize } = require("sequelize");

module.exports = {

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
                    },
                ]
            }]
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
                    { street: pesquisa.local },
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
                        { model: attributes, },
                        { model: rules, },
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
        const imovel = await address.create(imovelNovo);
        return imovel;
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