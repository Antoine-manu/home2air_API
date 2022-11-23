'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('CustomNotifications', {
              id_custom: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
              },
              title: {
                type: Sequelize.STRING,
                allowNull: false
              },
              data_id: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              limit: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              message: {
                type: Sequelize.STRING,
                allowNull: false
              },
              sound: {
                type: Sequelize.STRING,
                allowNull: false
              },
              icon: {
                type: Sequelize.STRING,
                allowNull: false
              },
              type_id: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              notif_id: {
                type: Sequelize.INTEGER,
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