const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
    timeSlotId: String,
    startTime: String,
    endTime: String,
    isBooked: Boolean,
});

const Slot = mongoose.model('Slot', slotSchema);
module.exports = Slot;


