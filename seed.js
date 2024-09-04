const mongoose = require('mongoose');
const Candidate = require('./src/models/Candidate');

mongoose.connect('mongodb://localhost/voting-platform', { })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Sample candidates to add
    const candidates = [
      { name: 'Candidate 1' },
      { name: 'Candidate 2' },
      { name: 'Candidate 3' },
    ];

    try {
      await Candidate.insertMany(candidates);
      console.log('Candidates added');
    } catch (error) {
      console.error('Error inserting candidates:', error);
    }

    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    mongoose.disconnect();
  });
