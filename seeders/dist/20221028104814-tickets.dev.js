'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", queryInterface.createTable('Tickets', {
              id_tickets: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              user_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              status: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              created_at: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false
              },
              created_by: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              udpated_at: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false
              },
              updated_by: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              comm_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              comm: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", queryInterface.dropTable('Tickets'));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};