module.exports = (sequelize, DataTypes) => {
    const Attributes = sequelize.define('attributes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        icon: DataTypes.STRING,
    }, {
        freezeTableName: true,
    });

    Attributes.associate = (models) => {
        Attributes.belongsToMany(models.product, {
            through: 'product_attributes',
        })

    };

    return Attributes;
}