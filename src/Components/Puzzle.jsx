/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Timer from './Timer';
import Characters from './Characters';

function Puzzle({
  time, setTime, finishedInTime, timeRanOut, selectedPuzzle,
}) {
  function findLocation(event) {
    let x = event.target.getBoundingClientRect().left;
    let y = event.target.getBoundingClientRect().top;
    x = event.clientX - x;
    y = event.clientY - y;
    console.log(x);
    console.log(y);
  }

  return (
    <div className="puzzle-space-container">
      <div className="puzzle-helper-container">
        <Timer time={time} setTime={setTime} timeRanOut={timeRanOut} />
        <Characters selectedPuzzle={selectedPuzzle} />
      </div>
      <img
        onClick={(e) => findLocation(e)}
        className="puzzle-space"
        src={`${process.env.PUBLIC_URL}/Images/${selectedPuzzle}.jpg`}
        alt={selectedPuzzle}
      />
      <button type="button" onClick={finishedInTime}>Win</button>
    </div>

  );
}

export default Puzzle;
