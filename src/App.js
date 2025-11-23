// src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Timer from "./Timer";
import Score from "./Score";

// Cartas base: usan las imágenes que ya tenés en /public/images
const cardImages = [
  { src: "/images/image1.png", id: 1 },
  { src: "/images/image2.png", id: 2 },
  { src: "/images/image3.png", id: 3 },
  { src: "/images/image4.png", id: 4 },
];

// Tiempo total del juego en segundos
const INITIAL_TIME = 60;

const App = () => {
  // Estado del mazo completo
  const [cards, setCards] = useState([]);
  // Cartas seleccionadas en el turno actual
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  // Bloquear clicks mientras se evalúa un turno
  const [disabled, setDisabled] = useState(false);
  // Métricas del juego
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [score, setScore] = useState(0);
  // Timer y estado de juego
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // 🔁 Generar mazo mezclado
  const generateShuffledDeck = () => {
    // Duplico cada imagen para tener la pareja
    const duplicated = cardImages.flatMap((card) => [
      { ...card, uuid: `${card.id}-a`, matched: false },
      { ...card, uuid: `${card.id}-b`, matched: false },
    ]);

    // Mezclar aleatoriamente
    const shuffled = duplicated.sort(() => Math.random() - 0.5);
    return shuffled;
  };

  // 🆕 Iniciar / reiniciar juego
  const startNewGame = () => {
    setCards(generateShuffledDeck());
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
    setMoves(0);
    setMatches(0);
    setScore(0);
    setTimeLeft(INITIAL_TIME);
    setGameOver(false);
    setGameWon(false);
  };

  // Al montar el componente, crear juego
  useEffect(() => {
    startNewGame();
  }, []);

  // ⏱️ Timer
  useEffect(() => {
    if (gameOver) return; // si terminó, no seguir descontando

    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      // Se acabó el tiempo
      setGameOver(true);
      setGameWon(false);
    }
  }, [timeLeft, gameOver]);

  // 🧠 Manejar selección de carta
  const handleChoice = (card) => {
    // Evitar clicks innecesarios o sobre cartas ya encontradas
    if (disabled || card.matched || gameOver) return;

    if (!firstChoice) {
      setFirstChoice(card);
    } else if (firstChoice && card.uuid !== firstChoice.uuid) {
      setSecondChoice(card);
    }
  };

  // 🎯 Comparar cartas cuando haya dos seleccionadas
  useEffect(() => {
    if (!firstChoice || !secondChoice) return;

    setDisabled(true);
    setMoves((prev) => prev + 1);

    if (firstChoice.id === secondChoice.id) {
      // ✅ Hay match
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === firstChoice.id ? { ...card, matched: true } : card
        )
      );
      setMatches((prev) => prev + 1);
      setScore((prev) => prev + 100); // sumamos puntos por acierto

      resetTurn();

    } else {
      // ❌ No hay match, esperamos un momento y damos vuelta
      setScore((prev) => (prev > 0 ? prev - 10 : 0)); // pequeño castigo
      setTimeout(() => {
        resetTurn();
      }, 800);
    }
  }, [firstChoice, secondChoice]);

  // Verificar victoria cuando cambian los matches
  useEffect(() => {
    if (cards.length > 0 && matches === cards.length / 2) {
      setGameWon(true);
      setGameOver(true);
    }
  }, [matches, cards]);

  // 🔄 Reset de selección de turno
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🧠 Juego de Memoria</h1>
        <p className="app-subtitle">
          Entrena tu memoria visual y tu lógica. Proyecto para portfolio de QA &amp; Dev.
        </p>
      </header>

      <section className="app-status">
        <Timer timeLeft={timeLeft} />
        <Score score={score} moves={moves} matches={matches} />
        <button className="btn-primary" onClick={startNewGame}>
          🔄 Reiniciar juego
        </button>
      </section>

      <main className="board-container">
        <div className="card-grid">
          {cards.map((card) => {
            const flipped =
              card.matched ||
              card.uuid === firstChoice?.uuid ||
              card.uuid === secondChoice?.uuid;

            return (
              <Card
                key={card.uuid}
                card={card}
                flipped={flipped}
                disabled={disabled}
                handleChoice={handleChoice}
              />
            );
          })}
        </div>
      </main>

      <footer className="app-footer">
        {gameOver && (
          <div className="game-message">
            {gameWon ? (
              <h2>🎉 ¡Felicitaciones! Completaste el juego.</h2>
            ) : (
              <h2>⏰ Se acabó el tiempo.</h2>
            )}
            <p>
              Puntaje final: <strong>{score}</strong> · Movimientos:{" "}
              <strong>{moves}</strong>
            </p>
            <button className="btn-secondary" onClick={startNewGame}>
              Jugar de nuevo
            </button>
          </div>
        )}
        <p className="footer-note">
          Desarrollado por <strong>Matías De Arriba</strong> · QA Manual &amp;
          Web Dev en formación
        </p>
      </footer>
    </div>
  );
};

export default App;
