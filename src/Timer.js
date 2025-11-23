// src/Timer.js
import React from "react";

/**
 * Muestra el tiempo restante en formato mm:ss
 */
const Timer = ({ timeLeft }) => {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="status-box">
      <span className="status-label">Tiempo</span>
      <span className="status-value">
        {minutes}:{seconds}
      </span>
    </div>
  );
};

export default Timer;
