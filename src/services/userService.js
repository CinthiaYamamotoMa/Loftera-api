const { user } = require('../models/');

module.exports = {

    async findAll(){
        const users = await user.findAll();
        return users;
    }
}