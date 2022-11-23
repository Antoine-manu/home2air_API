const db = require('../models');
const Roles = db.roles;
const Op = db.Sequelize.Op;

// Create and Save a new Roles
exports.create = (req, res) => {
	// Validate request
	if (!req.body.name) {
		res.status(400).send({
			message: 'Content can not be empty!'
		});
		return;
	}

	// Create a Roles
	const Roles = {
		name: req.body.name
	};

	// Save Roles in the database
	Roles.create(roles)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Roles.'
			});
		});
};

// Retrieve all Roles from the database.
exports.findAll = (req, res) => {
	const name = req.query.name;
	var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

	Roles.findAll({ where: condition })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving Roless.'
			});
		});
};

// Find a single Roles with an id
exports.findOne = (req, res) => {
	const id_role = req.params.id_role;

	Roles.findByPk(id_role)
		.then(data => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find Roles with id_role=${id_role}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Error retrieving Roles with id_role=' + id_role
			});
		});
};

// Update a Roles by the id in the request
exports.update = (req, res) => {
	const id_role = req.params.id_role;

	Roles.update(req.body, {
		where: { id_role: id_role }
	})
		.then(num => {
			if (num == 1) {
				res.send({
					message: 'Roles was updated successfully.'
				});
			} else {
				res.send({
					message: `Cannot update Roles with id_role=${id_role}. Maybe Roles was not found or req.body is empty!`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Error updating Roles with id_role=' + id_role
			});
		});
};

// Delete a Roles with the specified id in the request
exports.delete = (req, res) => {
	const id_role = req.params.id_role;

	Roles.destroy({
		where: { id_role: id_role }
	})
		.then(num => {
			if (num == 1) {
				res.send({
					message: 'Roles was deleted successfully!'
				});
			} else {
				res.send({
					message: `Cannot delete Roles with id_role=${id_role}. Maybe Roles was not found!`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Could not delete Roles with id_role=' + id_role
			});
		});
};
