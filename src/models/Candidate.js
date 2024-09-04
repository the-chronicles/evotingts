// const mongoose = require('mongoose');

// const candidateSchema = new mongoose.Schema({
//   name: { type: String, required: true },
// });

// module.exports = mongoose.model('Candidate', candidateSchema);

// const express = require('express');
// const { getCandidates } = require('../controllers/candidateController');
// const router = express.Router();

// router.get('/candidates', getCandidates);

// module.exports = router;

const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // id: { type: String, unique: true },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
