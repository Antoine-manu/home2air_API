'use strict';
var express = require('express');
const roles = require('../controllers/Roles_controller.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	res.json(roles.findAll);
});

// router.post('/', function(req, res) {
// 	res.json('Bogoss');
// });

router.patch('/:id', function(req, res) {
	res.json('Bogoss' + req.params.id);
});

router.delete('/:id', function(req, res) {
	res.json('Salut ' + req.params.id);
});

module.exports = router;
