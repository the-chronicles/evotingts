const express = require('express');
const { getResults } = require('../controllers/resultController');
const router = express.Router();

router.get('/results', getResults);

module.exports = router;
