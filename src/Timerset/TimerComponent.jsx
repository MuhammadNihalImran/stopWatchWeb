import React, { useState, useEffect } from "react";
import "./Timer.css";
const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0); // State for the total seconds
  const [isRunning, setIsRunning] = useState(false); // State to check if the timer is running

  useEffect(() => {
    document.title = `StopWatchWeb`;
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1); // Increment the seconds state
      }, 1000);
    }

    // Clean up function to clear the interval when the component unmounts or isRunning changes
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  // console.log(seconds % 60);
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return (
    <div className="widthSet d-flex shadow-lg p-4 mb-5 bg-white rounded-lg h-auto w-96 mx-auto align-items-center gap-3 justify-content-center">
      <h1 className="fontSize text-7xl font-bold mb-4">
        Timer: {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {displaySeconds < 10 ? "0" + displaySeconds : displaySeconds}
      </h1>
      <div className="d-flex align-items-center justify-content-center gap-2">
        <button
          type="button"
          className="btn btn-primary px-4 py-3"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          type="button"
          className="btn btn-primary  px-4 py-3"
          onClick={() => setSeconds(0)}
          disabled={isRunning}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
