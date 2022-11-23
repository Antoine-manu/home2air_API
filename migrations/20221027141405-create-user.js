'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_user: {
				type: Sequelize.INTEGER
			},
			firstname: {
				type: Sequelize.STRING
			},
			lastname: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			password: {
				type: Sequelize.STRING
			},
			role_id: {
				type: Sequelize.INTEGER
			},
			token: {
				type: Sequelize.STRING
			},
			created_at: {
				type: Sequelize.DATE
			},
			deleted_at: {
				type: Sequelize.DATE
			},
			active: {
				type: Sequelize.BOOLEAN
			},
			sensor_amount_locked: {
				type: Sequelize.BOOLEAN
			},
			spaces_amount_locked: {
				type: Sequelize.BOOLEAN
			},
			sensore_amount_max: {
				type: Sequelize.INTEGER
			},
			spaces_amount_max: {
				type: Sequelize.INTEGER
			},
			parent_account: {
				type: Sequelize.INTEGER
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
		await queryInterface.dropTable('Users');
	}
};
