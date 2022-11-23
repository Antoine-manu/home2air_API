'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Places', {
			id_place: { type: Sequelize.DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
			user_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			name: { type: Sequelize.DataTypes.STRING, allowNull: false },
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Places');
	}
};
