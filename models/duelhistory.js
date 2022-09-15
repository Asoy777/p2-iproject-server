"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DuelHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DuelHistory.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  DuelHistory.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Duel Status Method is required",
          },
          notEmpty: {
            msg: "Duel Status  Method is required",
          },
        },
      },
      against: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Enemy's name is required",
          },
          notEmpty: {
            msg: "Enemy's name is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "DuelHistory",
    }
  );
  return DuelHistory;
};
