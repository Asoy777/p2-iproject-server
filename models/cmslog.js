'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CmsLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CmsLog.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title is required",
        },
        notEmpty: {
          msg: "Title is required",
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
          msg: "Description is required",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email is required",
        },
        notEmpty: {
          msg: "Email is required",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'CmsLog',
  });
  return CmsLog;
};