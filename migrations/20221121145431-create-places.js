'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Places', {
      id_place: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
      user_id: { type: Sequelize.INTEGER, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
