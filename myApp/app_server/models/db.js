const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://eron1:eron12345@cluster0.7xwa96h.mongodb.net/myApp';

mongoose.connection.on('disconnected',()=>{

  console.log('Mongoose is Disconnected');
});

mongoose.connect(dbURI)
  .then(() => console.log('Mongoose is Finally Connected'))
  .catch(err => console.log('Could not connect:', err));