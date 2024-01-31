import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(new Date());
  }

  return (
    <div className="clock">
      <h2>Поточний час:</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
