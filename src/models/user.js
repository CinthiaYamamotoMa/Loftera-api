module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    cpf: {
      type: DataTypes.STRING,
      unique: true,
    },
    cellPhone: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['M', 'F', 'O'],
    },
    description: DataTypes.STRING,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    active: {
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
    defaultScope: {
      where: {
        active: true,
        deleted: false,
      }
    }
  });

  User.associate = (models) => {
    User.hasMany(models.product);
    User.hasMany(models.image);
    User.hasMany(models.address);
    User.belongsToMany(models.psychographicItem, {
      through: "user_psychographicItem"
    });
    User.belongsToMany(models.product, {
      through: "interested"
    });
  };

  return User;
}