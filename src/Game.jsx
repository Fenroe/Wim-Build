/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import PuzzleSelection from './Components/PuzzleSelection';
import Puzzle from './Components/Puzzle';
import SubmitTime from './Components/SubmitTime';
import GameOver from './Components/GameOver';

function Game() {
  const [gameIsActive, setGameIsActive] = useState(false);

  const [gameFinished, setGameFinished] = useState({
    finished: false,
    inTime: false,
  });

  const [selectedPuzzle, setSelectedPuzzle] = useState('');

  const [time, setTime] = useState({
    minutes: 10,
    seconds: 0,
  });

  function startGame() {
    setGameIsActive(true);
  }

  function endGame() {
    setGameIsActive(false);
  }

  function gameFinishedInTime() {
    endGame();
    setGameFinished({
      finished: true,
      inTime: true,
    });
  }

  function gameTimeRanOut() {
    endGame();
    setGameFinished({
      finished: true,
      inTime: false,
    });
  }

  function updateSelectedPuzzle(choice) {
    setSelectedPuzzle(choice);
  }

  function resetSelectedPuzzle() {
    setSelectedPuzzle('');
  }

  function restoreGameDefaults() {
    resetSelectedPuzzle();
    endGame();
    setGameFinished({
      finished: false,
      inTime: false,
    });
    setTime({
      minutes: 10,
      seconds: 0,
    });
  }

  function renderCorrectComponents() {
    if (gameFinished.finished) {
      if (gameFinished.inTime) {
        return <SubmitTime reset={restoreGameDefaults} />;
      } else {
        return <GameOver reset={restoreGameDefaults} />;
      }
    } else {
      if (gameIsActive) {
        return (
          <Puzzle
            time={time}
            setTime={setTime}
            finishedInTime={gameFinishedInTime}
            timeRanOut={gameTimeRanOut}
            selectedPuzzle={selectedPuzzle}
          />
        );
      } else {
        return <PuzzleSelection choosePuzzle={updateSelectedPuzzle} startGame={startGame} />;
      }
    }
  }

  let gameComponents = renderCorrectComponents();

  useEffect(() => {
    gameComponents = renderCorrectComponents();
  });

  return (
    <div className="game">
      <Header endGame={endGame} resetSelectedPuzzle={resetSelectedPuzzle} />
      {gameComponents}
    </div>
  );
}

export default Game;
