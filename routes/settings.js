'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.patch('/:id', function (req, res) {
    res.send('Bogoss' + req.params.id);
});


module.exports = router;