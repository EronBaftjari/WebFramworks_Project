const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://eron1:6br3@cluster0.7xwa96h.mongodb.net/';

mongoose.connect(dbURI).then(
  () => console.log('Mongoose is connected'),
  err => console.log('Mongoose connection error:', err.message)
);

