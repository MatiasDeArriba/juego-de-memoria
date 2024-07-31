import React, { useState, useEffect } from 'react';
import Card from './Card';
import Timer from './Timer';
import Score from './Score';

const cardImages = [
  { src: '/images/image1.png', matched: false },
  { src: '/images/image2.png', matched: false },
  { src: '/images/image3.png', matched: false },
  { src: '/images/image4.png', matched: false },
  // añadir mas en caso de haber mas imaagenes
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60); // 60 segundos
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // Duplicar y mezclar cartas
    const shuffledCards = [...cardImages, ...cardImages]
      .map(card => ({ ...card, id: Math.random() }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (timer > 0 && flippedCards.length === 2) {
      const timerId = setTimeout(() => {
        if (flippedCards[0].src === flippedCards[1].src) {
          setCards(prevCards => {
            return prevCards.map(card =>
              card.src === flippedCards[0].src ? { ...card, matched: true } : card
            );
          });
          setScore(prevScore => prevScore + 1);
        }
        setFlippedCards([]);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [flippedCards, timer]);

  useEffect(() => {
    if (timer > 0 && !gameOver) {
      const timerId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (timer === 0) {
      setGameOver(true);
    }
  }, [timer, gameOver]);

  const flipCard = (card) => {
    if (flippedCards.length < 2 && !card.matched && !flippedCards.includes(card)) {
      setFlippedCards(prevFlipped => [...prevFlipped, card]);
    }
  };

  const resetGame = () => {
    setCards([]);
    setFlippedCards([]);
    setScore(0);
    setTimer(60);
    setGameOver(false);
  };

  return (
    <div className="app">
      <header>
        <h1>Juego de Memoria</h1>
      </header>
      <Score score={score} />
      <Timer time={timer} />
      <div className="card-container">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            flipCard={flipCard}
            flipped={flippedCards.includes(card) || card.matched}
          />
        ))}
      </div>
      {gameOver && <h2>¡Juego Terminado! Tu puntaje: {score}</h2>}
      <button onClick={resetGame}>Reiniciar</button>
    </div>
  );
};

export default App;
