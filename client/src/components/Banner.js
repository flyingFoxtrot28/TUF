import React, { useState, useEffect } from 'react';
import './Banner.css';  // Import the CSS file

function Banner({ data }) {
  const [timeLeft, setTimeLeft] = useState(data.timer);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="banner">
      <p>{data.description}</p>
      <p className="timer">Time left: {timeLeft} seconds</p>
      <a href={data.link} target="_blank" rel="noopener noreferrer">Learn more</a>
    </div>
  );
}

export default Banner;
