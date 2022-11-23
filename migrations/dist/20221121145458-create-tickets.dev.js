'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('Tickets', {
              id_tickets: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              user_id: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              title: {
                type: Sequelize.STRING,
                allowNull: false
              },
              status: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              created_at: {
                type: Sequelize.DATE,
                allowNull: false
              },
              created_by: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              udpated_at: {
                type: Sequelize.DATE,
                allowNull: false
              },
              updated_by: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              comm_id: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              comm: {
                type: Sequelize.STRING,
                allowNull: false
              }
            }));

          case 2:
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
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};