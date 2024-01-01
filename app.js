const express = require('express');
const app = express();

const mongoose = require('mongoose');
const appointment = mongoose.model('appointment');
const slot = mongoose.model('slot');

app.use(express.urlencoded({ extended: true }));

const con = 'mongodb+srv://admin:admin@cluster0.qn8ilfa.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(con)
.then(()=>{
    app.listen(3000)
    console.log("connected to DB");
})
.catch((err)=>{console.log(err)});

app.set('view engine','ejs')


let timeSlots = [];
let appointments = [];


app.post('/slots', (req, res) => {
  const { startTime, endTime } = req.body;
  const timeSlotId = generateUniqueId(); 

  const newTimeSlot = {
    timeSlotId,
    startTime,
    endTime,
    isBooked: false,
  };

  timeSlots.push(newTimeSlot);

  res.json(newTimeSlot);
});

app.get('/slots', (req, res) => {
  const availableSlots = timeSlots.filter(slot => !slot.isBooked);
  res.json(availableSlots);
});

app.post('/appointments', (req, res) => {
    const { slotId, userDetails } = req.body;
  
    
    const selectedSlot = timeSlots.find(slot => slot.timeSlotId === slotId);
  
    if (selectedSlot && !selectedSlot.isBooked) {
      const appointmentId = generateUniqueId(); 
  
      const newAppointment = {
        appointmentId,
        slotId,
        userDetails,
      };
  
      appointments.push(newAppointment);
  
      selectedSlot.isBooked = true;
  
      res.json(newAppointment);
    } else {
      res.status(400).json({ error: 'Invalid time slot or already booked.' });
    }
  });
  app.get('/appointments', (req, res) => {
    res.json(appointments);
  });
  
  