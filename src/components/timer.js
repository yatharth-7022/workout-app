import React from "react";
import "./components_css/timer.css";
import { useState, useEffect } from "react";
export const Timer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isStarting, setIsStarting] = useState(true);
  useEffect(() => {
    let interval;
    if (isStarting) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;
          seconds++;
          if (seconds === 60) {
            minutes++;
            seconds = 0;
          }
          if (minutes === 60) {
            hours++;
            minutes = 0;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarting]);

  return (
    <div className="timer-container">
      {`${time.hours.toString().padStart(2, "0")}:${time.minutes
        .toString()
        .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}
    </div>
  );
};
