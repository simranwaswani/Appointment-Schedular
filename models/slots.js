const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slot_schema = new Schema({
    
    "TimeSlot": {
        "properties": {
          "timeSlotId": "string",
          "startTime": "datetime",
          "endTime": "datetime",
          "isBooked": "boolean"
        },
        "required": ["timeSlotId", "startTime", "endTime", "isBooked"]
      }
    
       
    });
    
  
const slot = mongoose.model( 'time_slot ',slot_schema );
module.exports = slot;;


