import React, { useState } from 'react';

const Slot = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('http://localhost:3000/slots', {
        method: 'POST',
      
      });

      if (response.ok) {
        console.log('Time slot created successfully');
      } else {
        console.error('Failed to create time slot');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create Time Slot</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="string"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />

        <label htmlFor="endTime">End Time:</label>
        <input
          type="string"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />

        <button type="submit">Create Time Slot</button>
      </form>
    </div>
  );
};

export default Slot;
