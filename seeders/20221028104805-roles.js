'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Roles', {
			id_role: { type: Sequelize.DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
			name: { type: Sequelize.DataTypes.STRING, allowNull: false }
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Roles');
	}
};
