'use strict';
var express = require('express');
var router = express.Router();
var debug = require('debug')('nodejs:api-server');
var cors = require('cors');
/*
 * author: Jay Liu
 * email: jaynsw@gmail.com
 * created date: 10/12/2015
 *
 * This router is for webapi.
 *
 *
 **/

router.use(cors());


router.get('/hello', (req, res, next) => {
	debug('handler->/hello');
	let message = 'hello world!';
	let payload = {message};
	return res.json(payload);
});

module.exports = router;
