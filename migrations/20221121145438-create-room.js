'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	await queryInterface.createTable('Room', {
		id_room: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		sensor_id: { type: Sequelize.INTEGER, allowNull: false },
		place_id: { type: Sequelize.INTEGER, allowNull: false },
		name: { type: Sequelize.STRING, allowNull: false }
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
