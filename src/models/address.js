module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    cep: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    avaliable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
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

  Address.associate = (models) => {
    // Address.belongsTo(models.user, {
    //   foreignKey: "userId"
    // });

    Address.belongsTo(models.product, {
      foreignKey: "productId"
    });

    Address.belongsTo(models.addressType, {
      foreignKey: "addressTypeId"
    });

  };

  return Address;
}