require('dotenv').config();

const mongoose = require('mongoose');
const Candidate = require('./src/models/Candidate');

// const atlasUri = process.env.MONGO_URI;

mongoose.connect(process.env.MONGODB_URI, { })
  .then(async () => {
    console.log('Connected to MongoDB');

    const candidates = [
      { name: 'Ebele Jonathan' },
      { name: 'Obasanjo Olusegun' },
      { name: 'Tinubu Bola Ahmed' },
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
