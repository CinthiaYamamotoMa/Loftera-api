const { attributes } = require('../models/');

module.exports = {

    async findAll() {
        const comodidades = await attributes.findAll({ raw: true });
        return comodidades;
    },

}