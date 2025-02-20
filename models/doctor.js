const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  workingHours: {
    start: {
      type: String,
      required: true
    },
    end: {
      type: String,
      required: true
    }
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
