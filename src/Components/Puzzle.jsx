/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect } from 'react';
import Timer from './Timer';
import Characters from './Characters';
import FindCharacterMenu from './FindCharacterMenu';

function Puzzle({
  time, setTime, finishedInTime, timeRanOut, selectedPuzzle, characters, coordinates,
  setCoordinates, resetCoordinates, checkIfCharacterFound, checkIfAllCharactersFound,
  setCharacters,
}) {
  function findLocation(event) {
    console.log(event.target.clientWidth);
    console.log(event.target.clientHeight);
    const xClient = event.target.getBoundingClientRect().left;
    const yClient = event.target.getBoundingClientRect().top;
    console.log(event.target.clientWidth - xClient);
    console.log(event.target.clientHeight - yClient);
    const xRelative = event.clientX - xClient;
    const yRelative = event.clientY - yClient;
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
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
      <Timer time={time} setTime={setTime} timeRanOut={timeRanOut} />
      <Characters characters={characters} />
      <img
        onClick={(e) => findLocation(e)}
        className="puzzle-space"
        src={`${process.env.PUBLIC_URL}/Images/${selectedPuzzle}.jpg`}
        alt={selectedPuzzle}
      />
      <FindCharacterMenu
        characters={characters}
        coordinates={coordinates}
        resetCoordinates={resetCoordinates}
        checkIfCharacterFound={checkIfCharacterFound}
        checkIfAllCharactersFound={checkIfAllCharactersFound}
        finishedInTime={finishedInTime}
      />
    </div>

  );
}

export default Puzzle;
