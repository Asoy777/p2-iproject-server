'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAvatar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAvatar.init({
    baseModel: DataTypes.STRING,
    head: DataTypes.STRING,
    body: DataTypes.STRING,
    weapon: DataTypes.STRING,
    armor: DataTypes.STRING,
    item: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserAvatar',
  });
  return UserAvatar;
};