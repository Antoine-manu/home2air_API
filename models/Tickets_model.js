'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tickets extends Model {
        static associate(models) {

        }
    }
    Tickets.init({
        id_tickets: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        created_by: { type: DataTypes.INTEGER, allowNull: false },
        udpated_at: { type: DataTypes.DATE, allowNull: false },
        updated_by: { type: DataTypes.INTEGER, allowNull: false },
        comm_id: { type: DataTypes.INTEGER, allowNull: false },
        comm: { type: DataTypes.STRING, allowNull: false }
    }, {
        sequelize, modelName: 'Tickets'
    });
    return Tickets;
}