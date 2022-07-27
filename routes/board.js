'use strict'

const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');

router.get('/', boardController.board);

module.exports = router;