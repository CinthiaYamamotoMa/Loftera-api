module.exports = (sequelize, DataTypes) => {
    const Rules = sequelize.define('rules', {
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

    Rules.associate = (models) => {
        Rules.belongsToMany(models.product, {
            through: 'product_rules',
            as: 'regra'
        })


    };

    return Rules;
}