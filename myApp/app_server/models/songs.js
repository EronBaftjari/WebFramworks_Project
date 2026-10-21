const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  album:{

    type: String,
    require: true
  },
  lastListened:{
      type: Date,
    'default': Date.now
  },
  Plays:{
     type: Number,
    'default': 0,
    min: 0

  }

});

mongoose.model('Track',songSchema,'Songs');


