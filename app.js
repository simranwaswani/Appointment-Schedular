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
