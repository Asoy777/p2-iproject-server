"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserInventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserInventory.belongsTo(models.User, { foreignKey: "UserId" });
      UserInventory.belongsTo(models.Item, { foreignKey: "ItemId" });
    }
  }
  UserInventory.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      ItemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Items",
          key: "id",
        },
      },
      amountPaid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Amount Paid is required",
          },
          notEmpty: {
            msg: "Amount Paid is required",
          },
          isNumeric: {
            msg: "Amount Paid must be number",
          },
        },
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Payment Method is required",
          },
          notEmpty: {
            msg: "Payment Method is required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is required",
          },
          notEmpty: {
            msg: "Descroption is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "UserInventory",
    }
  );
  return UserInventory;
};
