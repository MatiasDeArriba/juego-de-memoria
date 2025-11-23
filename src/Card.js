// src/Card.js
import React from "react";

/**
 * Componente de carta individual
 * - Muestra la parte trasera o delantera según "flipped"
 * - Llama a handleChoice cuando el usuario hace clic
 */
const Card = ({ card, flipped, disabled, handleChoice }) => {
  const onClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <button
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={onClick}
      disabled={disabled && !flipped}
      aria-label="Carta del juego de memoria"
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={card.src} alt="Carta de memoria" />
        </div>
        <div className="card-back">
          <span>?</span>
        </div>
      </div>
    </button>
  );
};

export default Card;
