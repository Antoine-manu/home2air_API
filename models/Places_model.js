'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Places extends Model {
        static associate(models) {

        }
    }
    Places.init({
        id_place: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
    }, {
        sequelize, modelName: 'Places'
    });
    return Places;
}