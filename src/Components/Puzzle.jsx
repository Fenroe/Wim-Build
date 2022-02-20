/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Timer from './Timer';

function Puzzle({
  time, setTime, finishedInTime, timeRanOut, selectedPuzzle,
}) {
  function findLocation(event) {
    console.log(event.clientX);
    console.log(event.clientY);
  }

  return (
    <div>
      <Timer time={time} setTime={setTime} timeRanOut={timeRanOut} />
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
