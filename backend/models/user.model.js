const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength:3
  },
  email: {type: String, required:true},
  phone: {type: Number, required: true},
  carType: {type: String, required: true},
  licensePlate: {type: String, required: true},
  carColor: {type: String, required: true}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
