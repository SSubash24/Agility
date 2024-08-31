import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [exerciseDesc, setExerciseDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields using React state
    if (!name || !age || !gender || !reminderDate || !exerciseDesc) {
      alert('Please fill out all fields.');
      return;
    }

    // Display the user's input in an alert
    alert(`Profile updated: \n
      Name: ${name} \n
      Age: ${age} \n
      Gender: ${gender} \n
      Reminder Date: ${reminderDate} \n
      Exercise/Yoga: ${exerciseDesc}`);
  };

  return (
    <div className="container mt-5">
<h2>Profile-page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input 
            type="number" 
            className="form-control" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select 
            className="form-control" 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Set Reminder for Exercise/Yoga:</label>
          <input 
            type="date" 
            className="form-control" 
            value={reminderDate} 
            onChange={(e) => setReminderDate(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Exercise/Yoga Description:</label>
          <textarea 
            className="form-control" 
            rows="3" 
            value={exerciseDesc} 
            onChange={(e) => setExerciseDesc(e.target.value)}
            placeholder="Describe the yoga or exercise you plan to do."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
