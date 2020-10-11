module.exports = (sequelize, DataTypes) => {
    const PsychographicItem = sequelize.define('psychographicItem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
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

    PsychographicItem.associate = (models) => {
        PsychographicItem.belongsTo(models.psychographicCategory, {
            foreignKey: "psychographicCategoryId"
        });

        PsychographicItem.belongsToMany(models.user, {
            through: "user_psychographicItem"
        });

    };

    return PsychographicItem;
}