const
    {   user,
        faculdade
    } = require('../models/');

const { Op, Sequelize, sequelize } = require("sequelize");

module.exports = {

    async findOneById(id) {
        const imovel = await user.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: faculdade,
                },
            ]
        });
        return imovel;
    },

    async store(imovelNovo) {
        const imovel = await faculdade.create(imovelNovo);
        return imovel;
    },

    async delete(id) {
        const imovel = await await user.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: faculdade,
                },
            ]
        });
        if (imovel) {
            imovel.deleted = true;
            await imovel.save();
        }
        return imovel;
    },
}