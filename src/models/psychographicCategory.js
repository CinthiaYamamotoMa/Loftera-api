module.exports = (sequelize, DataTypes) => {
    const PsychographicCategory = sequelize.define('psychographicCategory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        freezeTableName: true,
    }, {
        timestamps: false
    });

    PsychographicCategory.associate = (models) => {
        PsychographicCategory.hasMany(models.psychographicItem);
    };

    return PsychographicCategory;
}