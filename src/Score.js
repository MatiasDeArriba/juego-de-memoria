// src/Score.js
import React from "react";

/**
 * Muestra puntaje, movimientos y parejas encontradas
 */
const Score = ({ score, moves, matches }) => {
  return (
    <div className="status-group">
      <div className="status-box">
        <span className="status-label">Puntaje</span>
        <span className="status-value">{score}</span>
      </div>
      <div className="status-box">
        <span className="status-label">Movimientos</span>
        <span className="status-value">{moves}</span>
      </div>
      <div className="status-box">
        <span className="status-label">Parejas</span>
        <span className="status-value">{matches}</span>
      </div>
    </div>
  );
};

export default Score;
