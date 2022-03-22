"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    avgRating(reviews) {
      let total = 0;
      reviews.forEach((review) => (total += review.review));
      return total / reviews.length;
    }

    static associate(models) {
      // define association here
      Business.hasMany(models.Review, {
        foreignKey: "businessId",
        onDelete: "cascade",
        hooks: true,
      });
      Business.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Business.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
        },
      },
      userId: DataTypes.INTEGER,
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 50],
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
        },
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 30],
        },
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
        },
      },
      zipcode: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
          len: [5, 5],
        },
      },
      lat: DataTypes.INTEGER,
      lng: DataTypes.INTEGER,
      avg_review: DataTypes.INTEGER,
      img_link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Business",
    }
  );
  return Business;
};
