'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Company', {
			id_company: { type: Sequelize.DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
			user_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			name: { type: Sequelize.DataTypes.STRING, allowNull: false }
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Company');
	}
};
