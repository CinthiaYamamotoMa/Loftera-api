module.exports = (sequelize, DataTypes) => {
  const Interested = sequelize.define('interested', {

  }, {
    freezeTableName: true,
  });

  Interested.associate = (models) => {
    Interested.belongsTo(models.user, {
      foreignKey: "userId"
    });

    Interested.belongsTo(models.product, {
      foreignKey: "productId"
    });
  };

  return Interested;
}