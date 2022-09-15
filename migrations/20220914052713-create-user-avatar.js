'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserAvatars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      baseModel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      head: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      weapon: {
        type: Sequelize.STRING
      },
      armor: {
        type: Sequelize.STRING
      },
      item: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserAvatars');
  }
};