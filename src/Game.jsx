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

  const [selectedPuzzle, setSelectedPuzzle] = useState('');

  function updateSelectedPuzzle(choice) {
    setSelectedPuzzle(choice);
  }

  function resetSelectedPuzzle() {
    setSelectedPuzzle('');
  }

  return (
    <div className="game">
      <Header endGame={endGame} resetSelectedPuzzle={resetSelectedPuzzle} />
      {gameIsActive ? (
        <Puzzle
          endGame={endGame}
          selectedPuzzle={selectedPuzzle}
        />
      )
        : (
          <PuzzleSelection
            choosePuzzle={updateSelectedPuzzle}
            startGame={startGame}
          />
        )}
    </div>
  );
}

export default Game;
