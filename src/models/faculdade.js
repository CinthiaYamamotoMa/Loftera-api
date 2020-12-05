module.exports = (sequelize, DataTypes) => {
    const Faculdade = sequelize.define('faculdade', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        cep: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        district: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.STRING,
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        freezeTableName: true,
    });

    Faculdade.associate = (models) => {

        Faculdade.belongsTo(models.product, {
            foreignKey: "userId"
        });

    };

    return Faculdade;
}