"use strict";

const express = require('express');
const router = express.Router();

const { output, process } = require('./home.ctrl');

router.get('/', output.hello);
router.get('/login',output.login);
router.post('/login',process.login);

module.exports = router;