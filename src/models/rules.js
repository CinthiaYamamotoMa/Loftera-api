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

    return Rules;
}