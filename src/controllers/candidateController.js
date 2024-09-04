const Candidate = require('../models/Candidate');

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
