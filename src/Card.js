import React from 'react';

const Card = ({ card, flipCard, flipped }) => {
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => flipCard(card)}>
      {flipped ? <img src={card.src} alt="card" /> : <div className="card-back">?</div>}
    </div>
  );
};

export default Card;
