'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn("Items", "typeId", Sequelize.INTEGER);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn("Items", "typeId");
  }
};
