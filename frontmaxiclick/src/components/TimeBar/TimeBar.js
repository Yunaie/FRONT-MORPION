import React, { useState, useEffect } from 'react';
import './TimeBar.css';

function TimeBar() {
  let duration = 10;
  const [timeLeft, setTimeLeft] = useState(duration);
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    
    const timer = setTimeout(() => {
      const newTimeLeft = timeLeft - 1;
      setTimeLeft(newTimeLeft);
      setPercent((newTimeLeft / duration) * 100);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, duration]);

  return (
    <div className="timeBarContainer">
      <div
        className="timeBarProgress"
        style={{
          width: `${percent}%`,
        }}
      >
        {timeLeft}  secondes restantes
      </div>
    </div>
  );
};

export default TimeBar;
