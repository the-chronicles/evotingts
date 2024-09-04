const Vote = require('../models/Vote');
const Candidate = require('../models/Candidate');

exports.getResults = async (req, res) => {
  try {
    const results = await Vote.aggregate([
      { $group: { _id: '$candidateId', votes: { $sum: 1 } } },
      { $lookup: { from: 'candidates', localField: '_id', foreignField: '_id', as: 'candidate' } },
      { $unwind: '$candidate' },
      { $project: { candidateName: '$candidate.name', votes: 1 } },
    ]);
    
    res.json(results);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
