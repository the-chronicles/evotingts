const express = require('express');
const { getCandidates } = require('../controllers/candidateController');
const router = express.Router();

router.get('/candidates', getCandidates);

module.exports = router;
