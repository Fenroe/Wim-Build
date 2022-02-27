/* eslint-disable array-callback-return */
/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
import { useState } from 'react';
import characterData from './Data/characterData';
import puzzleData from './Data/puzzleData';
import Header from './Components/Header';
import PuzzleSelection from './Components/PuzzleSelection';
import Puzzle from './Components/Puzzle';
import SubmitTime from './Components/SubmitTime';
import GameOver from './Components/GameOver';

function Game() {
  // states used by lower components are all defined here
  const [gameIsActive, setGameIsActive] = useState(false);

  const [gameFinished, setGameFinished] = useState({
    finished: false,
    inTime: false,
  });

  const [selectedPuzzle, setSelectedPuzzle] = useState({
    name: '',
    url: '',
    x: null,
    y: null,
  });

  const [time, setTime] = useState({
    minutes: 10,
    seconds: 0,
  });

  const [characters, setCharacters] = useState([]);
  // TODO x and y aren't needed and can be removed
  const [coordinates, setCoordinates] = useState({
    x: null,
    y: null,
    xRelative: null,
    yRelative: null,
  });
  // helper functions that update state
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

  function updateSelectedPuzzle(name) {
    const choice = puzzleData.filter((puzzle) => (puzzle.name === name ? puzzle : null));
    if (choice.length > 0) setSelectedPuzzle(choice[0]);
  }

  function resetSelectedPuzzle() {
    setSelectedPuzzle('');
  }

  function generateCharacterList(map) {
    return characterData.filter((entry) => (entry.map === map ? entry : null));
  }

  function setCurrentCharacters(map) {
    setCharacters(generateCharacterList(map));
  }

  function resetCoordinates() {
    setCoordinates({
      x: null,
      y: null,
      xRelative: null,
      yRelative: null,
    });
  }

  function checkIfCharacterFound(data) {
    const xMultiplier = coordinates.x / selectedPuzzle.x;
    const yMultiplier = coordinates.y / selectedPuzzle.y;
    const adjustedData = {
      name: data.name,
      xStart: data.xStart * xMultiplier,
      xEnd: data.xEnd * xMultiplier,
      yStart: data.yStart * yMultiplier,
      yEnd: data.yEnd * yMultiplier,
    };
    let xVerified = false;
    let yVerified = false;
    if (coordinates.xRelative >= adjustedData.xStart
      && coordinates.xRelative <= adjustedData.xEnd) {
      xVerified = true;
    }
    if (coordinates.yRelative >= adjustedData.yStart
      && coordinates.yRelative <= adjustedData.yEnd) {
      yVerified = true;
    }
    if (xVerified === true && yVerified === true) {
      const updatedCharacters = characters.map((character) => {
        if (character.name === adjustedData.name) character.found = true;
        return character;
      });
      setCharacters(updatedCharacters);
    }
  }

  function checkIfAllCharactersFound() {
    if (characters.every((character) => character.found === true)) return true;
    return false;
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
    setCharacters([]);
    resetCoordinates();
  }
  // TODO find a way to make this function look cleaner
  function renderCorrectComponents() {
    if (gameFinished.finished) {
      if (gameFinished.inTime) {
        return <SubmitTime reset={restoreGameDefaults} time={time} />;
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
            characters={characters}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            resetCoordinates={resetCoordinates}
            checkIfCharacterFound={checkIfCharacterFound}
            checkIfAllCharactersFound={checkIfAllCharactersFound}
            setCharacters={setCharacters}
            endGame={endGame}
          />
        );
      } else {
        return (
          <PuzzleSelection
            choosePuzzle={updateSelectedPuzzle}
            setCurrentCharacters={setCurrentCharacters}
            startGame={startGame}
          />
        );
      }
    }
  }

  return (
    <div className="page-container">
      {!gameIsActive ? <Header /> : null}
      {renderCorrectComponents()}
    </div>
  );
}

export default Game;
