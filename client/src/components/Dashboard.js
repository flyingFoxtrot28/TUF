import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css';  // Import the CSS file

function Dashboard({ setBannerData }) {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(60);
  const [link, setLink] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBanner = { description, timer, link, is_visible: isVisible };

    axios.post('http://localhost:5000/api/banner', updatedBanner)
      .then(response => {
        setBannerData(updatedBanner);
        alert('Banner updated successfully!');
      })
      .catch(error => {
        console.error('Error updating banner:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="dashboard">
      <label>
        Banner Description:
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </label>
      <label>
        Timer (seconds):
        <input 
          type="number" 
          value={timer} 
          onChange={(e) => setTimer(Number(e.target.value))} 
        />
      </label>
      <label>
        Banner Link:
        <input 
          type="text" 
          value={link} 
          onChange={(e) => setLink(e.target.value)} 
        />
      </label>
      <label>
        Banner Visible:
        <input 
          type="checkbox" 
          checked={isVisible} 
          onChange={(e) => setIsVisible(e.target.checked)} 
        />
      </label>
      <button type="submit">Update Banner</button>
    </form>
  );
}

export default Dashboard;