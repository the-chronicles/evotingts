const express = require('express');
const { vote } = require('../controllers/voteController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/vote', authenticate, vote);

module.exports = router;
