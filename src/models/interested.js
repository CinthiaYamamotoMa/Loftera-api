module.exports = (sequelize, DataTypes) => {
    const Interested = sequelize.define('interested', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    }, {
      freezeTableName: true,
    });
  
    Interested.associate = (models) => {
        Interested.belongsTo(models.user, {
        foreignKey: "userId"
      });
  
      Interested.belongsTo(models.product, {
        foreignKey: "id"
      });
    };
  
    return Interested;
  }