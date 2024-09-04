const Vote = require('../models/Vote');
const User = require('../models/User');
const Candidate = require('../models/Candidate');

exports.vote = async (req, res) => {
  try {
    const { candidateId } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found.' });
    }

    const existingVote = await Vote.findOne({ userId });
    if (existingVote) {
      return res.status(400).json({ success: false, message: 'You have already voted.' });
    }

    const vote = new Vote({ userId, candidateId });
    await vote.save();

    res.json({ success: true, message: 'Vote recorded.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
