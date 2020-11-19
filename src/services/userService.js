const { findInterested } = require('../controller/userController');
const { user,
        product,
        ratings,
        attributes } = require('../models/');

module.exports = {

    async findAll() {
        const users = await user.findAll();
        return users;
    },

    async findOneById(id) {
        const userresponse = await user.findByPk(id);
        return userresponse;
    },

    async findByEmail(email) {
        const userresponse = await user.findOne({
            attributes: ['id', 'question', 'answer'],
            where: {
                email: email
            }
        })
        return userresponse;
    },

    async findInterested(id) {
        console.log('id >>>>> ', id)
        const interessados = await user.findOne({
            where: {
                deleted: false,
                active: true,
                id: id
            },
            include: [
                {
                    model: product,
                    as: 'interessados',
                    include: [
                        {
                            model: ratings,
                        },
                        {
                            model: attributes,
                        },
                    ]
                },
            ]
        });
        console.log('>>>>>>>>>>', interessados)
        return interessados;
    },

    async storeUser(userReceived) {
        const createdUser = await user.create(userReceived);
        return createdUser;
    },

    async updateUser(userReceived, id) {
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

    async delete(id) {
        const userresponse = await user.findByPk(id);
        if (userresponse) {
            userresponse.deleted = true;
            await userresponse.save();
        }
        return userresponse;
    },

    async auth(email, password) {

        await user.findOne({
            where: {
                email: email
            }
        })
            .then((foundUser) => {
                if (foundUser) {
                    if (password == foundUser.dataValues.password) {
                        return foundUser;
                    }
                }
            })
    }
}