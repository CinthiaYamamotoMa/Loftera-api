const { user } = require('../models/');

module.exports = {

    async findAll(){
        const users = await user.findAll();
        return users;
    },

    async findOneById(id){
        const userresponse = await user.findByPk(id);
        return userresponse;
    },

    async storeUser(userReceived){
        const createdUser = await user.create(userReceived);
        return createdUser;
    },

    async updateUser(userReceived, id){
        const userresponse = await user.findByPk(id);
        
        userresponse.name = userReceived.name;
	    userresponse.email = userReceived.email;
	    userresponse.password = userReceived.password;
	    userresponse.cpf = userReceived.cpf;
	    userresponse.cellPhone = userReceived.cellPhone;
	    userresponse.gender = userReceived.gender;
        userresponse.description = userReceived.description;
        
        await userresponse.save();

        return userresponse;
    },

    async delete(id){
        const userresponse = await user.findByPk(id);
        if(userresponse){
            userresponse.deleted = true;
            await userresponse.save();
        }
        return userresponse;
    }
}