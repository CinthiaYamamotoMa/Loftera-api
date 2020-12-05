module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('image', {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },{
      freezeTableName: true,
    });

    Image.associate = (models) => {
        Image.belongsTo(models.product, {
          foreignKey:"productId"
        });
        Image.belongsTo(models.user, {
          foreignKey:"userId"
        });
      };
  
    return Image;
  }