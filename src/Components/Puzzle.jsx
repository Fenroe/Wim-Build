/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Timer from './Timer';
import Characters from './Characters';
import FindCharacterMenu from './FindCharacterMenu';

function Puzzle({
  time, setTime, finishedInTime, timeRanOut, selectedPuzzle, characters, coordinates,
  setCoordinates, resetCoordinates, checkIfCharacterFound, checkIfAllCharactersFound,
}) {
  function findLocation(event) {
    const xClient = event.target.getBoundingClientRect().left;
    const yClient = event.target.getBoundingClientRect().top;
    const xRelative = event.clientX - xClient;
    const yRelative = event.clientY - yClient;
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
      xRelative,
      yRelative,
    });
  }

  return (
    <div className="puzzle-space-container">
      <div className="puzzle-helper-container">
        <Timer time={time} setTime={setTime} timeRanOut={timeRanOut} />
        <Characters characters={characters} />
      </div>
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
