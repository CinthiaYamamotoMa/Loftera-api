module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        aluguel: DataTypes.DECIMAL(10, 2),
        condo: DataTypes.DECIMAL(10, 2),
        iptu: DataTypes.DECIMAL(10, 2),
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }, {
        freezeTableName: true,
    });

    Product.associate = (models) => {
        Product.belongsTo(models.user, {
            foreignKey: "userId"
        });

        Product.belongsToMany(models.attributes, {
            through: 'product_attributes',
            as: 'comodidade'
        })

        Product.belongsToMany(models.rules, {
            through: 'product_rules',
            as: 'regra'
        })

        Product.belongsToMany(models.user, {
            through: 'interested',
            as: 'interessados'
        })

        Product.hasOne(models.address);

        Product.hasMany(models.comments);

        Product.hasOne(models.ratings);

    };

    return Product;
}