module.exports = (sequelize, DataTypes) => {
    const Ratings = sequelize.define('ratings', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        limpeza: DataTypes.DECIMAL(10, 2),
        comunicacao: DataTypes.DECIMAL(10, 2),
        checkin: DataTypes.DECIMAL(10, 2),
        precisao: DataTypes.DECIMAL(10, 2),
        localizacao: DataTypes.DECIMAL(10, 2),
        valor: DataTypes.DECIMAL(10, 2),
        qtdAvalicoes: DataTypes.INTEGER,
    }, {
        freezeTableName: true,
    });

    Ratings.associate = (models) => {
  
      Ratings.hasOne(models.product, {
        foreignKey: "productId"
      });
    };

    return Ratings;
}