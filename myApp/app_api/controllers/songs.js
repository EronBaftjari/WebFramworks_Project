const mongoose = require('mongoose');
const Track = mongoose.model('Track');

// getting all my songs from the database in mongoDB

const songsList = async (req, res) => {
  const songs = await Track.find();
  res.status(200).json(songs);
};

module.exports = { songsList };