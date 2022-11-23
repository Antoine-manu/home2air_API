'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", queryInterface.createTable('CustomNotifications', {
              id_custom: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
              },
              title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              data_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              limit: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              message: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              sound: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              icon: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              type_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              notif_id: {
                type: Sequelize.DataTypes.INTEGER,
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
            return _context2.abrupt("return", queryInterface.dropTable('CustomNotifications'));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};