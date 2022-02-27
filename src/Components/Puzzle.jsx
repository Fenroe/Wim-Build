/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect } from 'react';
import Timer from './Timer';
import Characters from './Characters';
import FindCharacterMenu from './FindCharacterMenu';

function Puzzle({
  time, setTime, finishedInTime, timeRanOut, selectedPuzzle, characters, coordinates,
  setCoordinates, resetCoordinates, checkIfCharacterFound, checkIfAllCharactersFound,
  setCharacters, endGame,
}) {
  function findLocation(event) {
    const xRelative = event.pageX;
    const yRelative = event.pageY;
    setCoordinates({
      x: document.body.scrollWidth,
      y: document.body.scrollHeight,
      xRelative,
      yRelative,
    });
  }

  useEffect(() => {
    const resetCharacters = characters.map((character) => {
      character.found = false;
      return character;
    });
    setCharacters(resetCharacters);
  }, []);

  return (
    <div className="puzzle-space-container">
      <Timer time={time} setTime={setTime} timeRanOut={timeRanOut} endGame={endGame} />
      <Characters characters={characters} />
      <img
        onClick={(e) => findLocation(e)}
        className="puzzle-space"
        src={selectedPuzzle.url}
        alt={selectedPuzzle.name}
      />
      <FindCharacterMenu
        characters={characters}
        coordinates={coordinates}
        resetCoordinates={resetCoordinates}
        checkIfCharacterFound={checkIfCharacterFound}
        checkIfAllCharactersFound={checkIfAllCharactersFound}
        finishedInTime={finishedInTime}
        endGame={endGame}
      />
    </div>

  );
}

export default Puzzle;
