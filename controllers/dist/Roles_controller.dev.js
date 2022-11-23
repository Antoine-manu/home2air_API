"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var db = require('../models');

var Roles = db.roles;
var Op = db.Sequelize.Op; // Create and Save a new Roles

exports.create = function (req, res) {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  } // Create a Roles


  var Roles = {
    name: req.body.name
  }; // Save Roles in the database

  Roles.create(roles).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Roles.'
    });
  });
}; // Retrieve all Roless from the database.


exports.findAll = function (req, res) {
  var name = req.query.name;
  var condition = name ? {
    name: _defineProperty({}, Op.like, "%".concat(name, "%"))
  } : null;
  Roles.findAll({
    where: condition
  }).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving Roless.'
    });
  });
}; // Find a single Roles with an id


exports.findOne = function (req, res) {
  var id_role = req.params.id_role;
  Roles.findByPk(id_role).then(function (data) {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: "Cannot find Roles with id_role=".concat(id_role, ".")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: 'Error retrieving Roles with id_role=' + id_role
    });
  });
}; // Update a Roles by the id in the request


exports.update = function (req, res) {
  var id_role = req.params.id_role;
  Roles.update(req.body, {
    where: {
      id_role: id_role
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: 'Roles was updated successfully.'
      });
    } else {
      res.send({
        message: "Cannot update Roles with id_role=".concat(id_role, ". Maybe Roles was not found or req.body is empty!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: 'Error updating Roles with id_role=' + id_role
    });
  });
}; // Delete a Roles with the specified id in the request


exports["delete"] = function (req, res) {
  var id_role = req.params.id_role;
  Roles.destroy({
    where: {
      id_role: id_role
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: 'Roles was deleted successfully!'
      });
    } else {
      res.send({
        message: "Cannot delete Roles with id_role=".concat(id_role, ". Maybe Roles was not found!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: 'Could not delete Roles with id_role=' + id_role
    });
  });
};