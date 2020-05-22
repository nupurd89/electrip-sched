const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: {type: String, required:true},
  description: {type: String, required:true},
  duration: {type: Number, required:true},
  date: {type: Date, required:true},
  startTime: {type: String, required: true},
  stopTime: {type: String, required: true}
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

//CRUD OPERATIONS - create, read, update, delete
