const { rules } = require('../models/');

module.exports = {

    async findAll() {
        const regras = await rules.findAll({ raw: true });
        return regras;
    },

}