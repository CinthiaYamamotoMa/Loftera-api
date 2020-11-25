const
    {
        address,
        product,
        ratings,
        attributes,
        user,
        rules,
        interested,
        comments
    } = require('../models/');

module.exports = {

    async findAll() {
        const imoveis = await address.findAll({
            where: {
                deleted: false,
                avaliable: true
            },
            include: [{
                model: product,
                include: [
                    {
                        model: ratings,
                    },
                    {
                        model: attributes,
                    },
                ]
            }]
        });
        return imoveis;
    },

    async findOneById(id) {
        const imovel = await address.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: product,
                    include: [
                        { model: user },
                        {
                            model: user,
                            as: 'interessados'
                        },
                        { model: ratings, },
                        { model: attributes, },
                        { model: rules, },
                        {
                            model: comments,
                            include: [
                                { model: user }
                            ]
                        },
                    ]

                },
            ]
        });
        return imovel;
    },

    async storeUser(imovelNovo) {
        const imovel = await address.create(imovelNovo);
        return imovel;
    },

    async updateUser(userReceived, id) {
        const userresponse = await address.findByPk(id);

        // userresponse.name = userReceived.name;
        // userresponse.email = userReceived.email;
        // userresponse.password = userReceived.password;
        // userresponse.cpf = userReceived.cpf;
        // userresponse.cellPhone = userReceived.cellPhone;
        // userresponse.gender = userReceived.gender;
        // userresponse.description = userReceived.description;

        await userresponse.save();

        return userresponse;
    },

    async delete(id) {
        const imovel = await address.findByPk(id);
        if (imovel) {
            imovel.deleted = true;
            await imovel.save();
        }
        return imovel;
    },

    async storeInterested(interested) {
        console.log('id >>>>> ', interested)
        // const interesses = await user.update({
        //     where: {
        //         id: interested.userId
        //     },
        //     Interessados: [
        //         { 
        //             userId: interested.userId, 
        //             productId: interested.productId, 
        //         }
        //     ]
        // }, {
        //     include: [{
        //         model: Product,
        //         as: 'interessados'
        //     }]
        // })

        const userresponse = await product.findOne({
            where: {
                deleted: false,
                active: true,
                id: interested.productId
            },
            include: [
                {
                    model: user,
                    as: 'interessados',
                },
            ]
        });

        // console.log('>>>>>>>>>>', userresponse.dataValues.interessados)
        console.log('>>>>>>>>>>', userresponse)


        // userresponse.dataValues.interessados.unshift(JSON.parse(interested.user))
        
        await userresponse.save();

        // return userresponse;
    },

}