'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('Notifications', {
              id_notifications: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              user_id: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              custom: {
                type: Sequelize.BOOLEAN,
                allowNull: false
              },
              read: {
                type: Sequelize.BOOLEAN,
                allowNull: false
              },
              type: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              date: {
                type: Sequelize.DATE,
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