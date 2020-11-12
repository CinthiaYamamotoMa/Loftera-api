module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        aluguel: DataTypes.DECIMAL(10, 2),
        condo: DataTypes.DECIMAL(10, 2),
        iptu: DataTypes.DECIMAL(10, 2),
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
    });

    Product.associate = (models) => {
        Product.belongsTo(models.user, {
          foreignKey: "userId"
        });

        Product.hasMany(models.address);

        Product.hasMany(models.rules);

        Product.hasMany(models.attributes);

        Product.hasMany(models.comments);

        Product.hasOne(models.ratings, {
            foreignKey: "ratingId"
          });

        // Product.hasMany(models.solicitation);
      };

    return Product;
}