module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define('permission', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        freezeTableName: true,
    });

    return Permission;
}