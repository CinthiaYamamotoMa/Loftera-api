module.exports = (sequelize, DataTypes) => {
    const PsychographicItem = sequelize.define('psychographicItem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        icon: DataTypes.STRING,
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        freezeTableName: true,
    });

    PsychographicItem.associate = (models) => {
        PsychographicItem.belongsTo(models.psychographicCategory, {
            foreignKey: "psychographicCategoryId"
        });

        PsychographicItem.belongsToMany(models.user, {
            through: "caracteristicas_user",
            as: "caracteristicas"
        });

    };

    return PsychographicItem;
}