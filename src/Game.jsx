import { useState } from 'react';
import Header from './Components/Header';
import PuzzleSelection from './Components/PuzzleSelection';
import Puzzle from './Components/Puzzle';

function Game() {
  const [gameIsActive, setGameIsActive] = useState(false);

  function startGame() {
    setGameIsActive(true);
  }

  function endGame() {
    setGameIsActive(false);
  }

  return (
    <div className="game">
      <Header endGame={endGame} />
      {gameIsActive ? <Puzzle /> : <PuzzleSelection startGame={startGame} />}
    </div>
  );
}

export default Game;
