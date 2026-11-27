
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    } else if (seconds > 0) {
      setTimeLeft(seconds);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setSeconds(0);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>Countdown Timer</h1>

      <label>
        Set Time (seconds):{" "}
      </label>

      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(Math.max(0, Number(e.target.value)))}
        disabled={isRunning}
      />

      <h2>Time Left: {timeLeft} seconds</h2>

      <button
        onClick={handleStart}
        disabled={isRunning || (seconds <= 0 && timeLeft <= 0)}
      >
        Start
      </button>

      <button
        onClick={handleStop}
        disabled={!isRunning}
      >
        Stop
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
