const { attributes, product } = require('../models/');

module.exports = {

    async findAll() {
        const comodidades = await attributes.findAll({ raw: true });
        return comodidades;
    },

    async findById(id) {
        const userresponse = await attributes.findByPk(id);
        return userresponse;
    },

    async storeAttributeProduct(received) {
        product_attributes.attributeId = received.attributeId;
        product_attributes.productId = received.productId;
        const createdUser = await product_attributes.create(received);

        return createdUser;
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