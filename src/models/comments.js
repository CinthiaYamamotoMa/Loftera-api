module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('comments', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      description: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }, {
      freezeTableName: true,
    });
  
    Comments.associate = (models) => {
        Comments.belongsTo(models.user, {
          foreignKey: "userId"
        });
  
        Comments.belongsTo(models.product, {
          foreignKey: "productId"
        });
    };
  
    return Comments;
  }