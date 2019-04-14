'use strict';
var express = require('express');
var router = express.Router();
var debug = require('debug')('nodejs:hello');
var cors = require('cors');
var service = require('../service');

router.use(cors());
router.get('/list/', (req, res, next) => {
	debug('handler->/user/list/');
	service.listUsers().then(users => {
		res.json(users);
	}).catch(err => {
		res.status(500).end();
	});
	
});

module.exports = router;
