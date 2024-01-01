const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    appointmentId: String,
    slotId: String,
    userDetails: {
      name: String,
      email: String
    },
    "required": [" appointmentId", "slotId", "userDetails"]
  });
  
  
const appointment = mongoose.model('appointment', appointmentSchema);
module.exports = appointment;











   



