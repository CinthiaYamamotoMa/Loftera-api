const { psychographicItem,
    user } = require('../models/');

module.exports = {

    async findAll() {
        const caracteristicas = await psychographicItem.findAll({
            where: {
                deleted: false
            }
        });
        return caracteristicas;
    },

    async findById(id) {
        const caracteristicas = await psychographicItem.findOne({
            where: {
                id: id
            }
        });
        return caracteristicas;
    },

    async findCaracteristicasUser(id) {
        const usuario = await user.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: psychographicItem,
                    as: "caracteristicas",
                },
            ]
        });
        // console.log(user.dataValues.caracteristicas[0].dataValues)
        return usuario;
    },

    async findAllUsers() {
        const caracteristicas = await psychographicItem.findAll({
            where: {
                deleted: false
            },
            include: [
                {
                    model: user,
                    as: 'caracteristicas',
                    attributes: ['id', 'name', 'gender']
                },
            ]
        });

        // console.log(caracteristicas[0].caracteristicas)

        return caracteristicas;
    },

}