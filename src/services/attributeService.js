const { attributes, product } = require('../models/');

module.exports = {

    async findAll() {
        const comodidades = await attributes.findAll({ raw: true });
        return comodidades;
    },

    async findByPk(id) {
        const comodidades = await attributes.findOne({
            where: {
                id: id
            },
            include: [{
                model: product,
                as: 'comodidade'
            }]
        });
        // console.log(comodidades)
        return comodidades;
    },
}