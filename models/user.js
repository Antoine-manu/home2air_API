'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id_user: DataTypes.INTEGER,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    token: DataTypes.STRING,
    created_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    sensor_amount_locked: DataTypes.BOOLEAN,
    spaces_amount_locked: DataTypes.BOOLEAN,
    sensore_amount_max: DataTypes.INTEGER,
    spaces_amount_max: DataTypes.INTEGER,
    parent_account: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};