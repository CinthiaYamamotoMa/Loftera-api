const { rules } = require('../models/');

module.exports = {

    async findAll() {
        const regras = await rules.findAll({ raw: true });
        return regras;
    },

    async findById(id) {
        const userresponse = await rules.findByPk(id);
        return userresponse;
    },

    async storeAttributeProduct(received) {
        product_rules.ruleId = received.ruleId;
        product_rules.productId = received.productId;
        const createdUser = await product_rules.create(received);

        return createdUser;
    },


}