module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('image', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      description: DataTypes.STRING,
      url: DataTypes.STRING,
      thumbnail: {
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
    },{
      freezeTableName: true,
    });

    Image.associate = (models) => {
        Image.belongsTo(models.product, {
          foreignKey:"id"
        });

      };
  
    return Image;
  }