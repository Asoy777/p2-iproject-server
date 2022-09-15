"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "avatarID", Sequelize.INTEGER);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "avatarID");
  },
};
