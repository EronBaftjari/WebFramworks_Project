const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const usersSchema = new mongoose.Schema({
  forename: {
    type: String,
    required: true
  },
  surename:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
      
  }

});
usersSchema.plugin(passportLocalMongoose.default || passportLocalMongoose, { usernameField: 'email' });
mongoose.model('User',usersSchema,'users');

