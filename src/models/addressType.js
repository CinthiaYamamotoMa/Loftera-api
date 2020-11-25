module.exports = (sequelize, DataTypes) => {
    const AddressType = sequelize.define('addressType', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        icon: DataTypes.STRING,
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        freezeTableName: true,
    }, {
        timestamps: false
    });

    AddressType.associate = (models) => {
        AddressType.hasOne(models.address);
    };

    return AddressType;
}