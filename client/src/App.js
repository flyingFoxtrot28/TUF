import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';  // Import the CSS file

function App() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/banner')
      .then(response => {
        setBannerData(response.data);
      })
      .catch(error => {
        console.error('Error fetching banner data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Banner App</h1>
      <div className="container">
        {bannerData && bannerData.is_visible && <Banner data={bannerData} />}
        <Dashboard setBannerData={setBannerData} />
      </div>
    </div>
  );
}

export default App;
