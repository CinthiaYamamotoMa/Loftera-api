const { user,
    product,
    ratings,
    attributes,
    image,
    faculdade } = require('../models/');

module.exports = {

    async findAll() {
        const users = await user.findAll();
        return users;
    },

    async findById(id) {
        const userresponse = await user.findByPk(id);
        return userresponse;
    },

    async findOneById(id) {
        const userresponse = await user.findOne({
            where: {
                id: id
            },
            include: [{
                model: image,
            },
            {
                model: faculdade,
            }]
        });
        return userresponse;
    },

    async findByEmail(email) {
        const userresponse = await user.findOne({
            attributes: ['id', 'question', 'answer', 'email'],
            where: {
                email: email
            }
        })
        return userresponse;
    },

    async findInterested(id) {
        const interessados = await user.findOne({
            where: {
                deleted: false,
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
        return interessados;
    },

    async storeInteresse(interesse) {
        const interessados = await user.findOne({
            // raw: true,
            where: {
                deleted: false,
                id: interesse.userId
            },
        })

        return interessados;
    },

    async storeUser(userReceived) {
        userReceived.createdAt = new Date();
        userReceived.updatedAt = new Date();
        const createdUser = await user.create(userReceived);

        return createdUser;
    },

    async updateUser(userReceived, id) {
        const userresponse = await user.findByPk(id);

        userresponse.name = userReceived.name;
        userresponse.email = userReceived.email;
        // userresponse.password = userReceived.password;
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
    },
    async updatePassword(userReceived, id) {
        const userresponse = await user.findByPk(id);
        if (userresponse.password == userReceived.password) {
            userresponse.password = userReceived.newPassword;
            await userresponse.save();
            return userresponse;
        }
        else if (userresponse.answer == userReceived.answer) {
            userresponse.password = userReceived.newPassword;
            await userresponse.save();
            return userresponse;
        }
        else {
            let message = "Senha antiga incorreta";
            return message;
        }
    },

    async updateRole(usuario) {
        const userresponse = await user.findByPk(usuario.userId);
        userresponse.role = usuario.role;
        await userresponse.save();
        return userresponse;
    },

    async updateAvatar(usuario, filename) {
        const avatar = await image.findOne({
            where: {
                userId: usuario
            }
        });
        avatar.name = filename;
        avatar.deleted = false;

        await avatar.save();
        return avatar;
    },

    async storeAvatar(userId) {
        var avatar = {
            name: 'default.png',
            deleted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: userId,
        }
        
        var createdImage = await image.create(avatar);
        
        return createdImage;
    },

    async deleteAvatar(usuario) {
        const avatar = await image.findOne({
            where: {
                userId: usuario
            }
        });
        avatar.deleted = true;

        await avatar.save();
        return avatar;
    },
}