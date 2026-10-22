const mongoose = require('mongoose');

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
      
  },
  password:{
     type: String,
     require: true
    
  }

});

mongoose.model('User',usersSchema,'users');

