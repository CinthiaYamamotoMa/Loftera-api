const { psychographicItem } = require('../models/');

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

}