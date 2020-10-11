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

    Permission.associate = (models) => {
        Permission.belongsToMany(models.profile, {
            through: "profile_permission"
        });
    };

    return Permission;
}