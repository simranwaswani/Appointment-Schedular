const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointment_schema = new Schema({
    "Appointment": {
        "properties": {
          "appointmentId": "string",
          "slotId": "string",  
          "userDetails": {
            "name": "string",
            "email": "string"
          }
        },
        "required": ["appointmentId", "slotId", "userDetails"]
      }
})
      
const appointment = mongoose.model( 'appointment ',appointment_schema );
module.exports = appointment;



   



