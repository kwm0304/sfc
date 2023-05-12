const mongoose = require('mongoose')

const { Schema } = mongoose;

const userSchema = new Schema({
  first: {
    type: String,
    required: true,
    trim: true
  },
  last: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
  }

})