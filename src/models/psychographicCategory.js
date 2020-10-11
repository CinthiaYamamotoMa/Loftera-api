module.exports = (sequelize, DataTypes) => {
    const PsychographicCategory = sequelize.define('psychographicCategory', {
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

    PsychographicCategory.associate = (models) => {
        PsychographicCategory.hasMany(models.psychographicItem);
    };

    return PsychographicCategory;
}