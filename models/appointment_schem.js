const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    appointmentId: String,
    slotId: String,
    userDetails: {
      name: String,
      email: String
    },
});


const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;



