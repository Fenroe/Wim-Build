/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Timer from './Timer';

function Puzzle({ finishedInTime, timeRanOut, selectedPuzzle }) {
  function findLocation(event) {
    console.log(event.clientX);
    console.log(event.clientY);
  }

  console.log(finishedInTime);

  return (
    <div>
      <Timer timeRanOut={timeRanOut} />
      <img
        onClick={(e) => findLocation(e)}
        className="puzzle-space"
        src={`${process.env.PUBLIC_URL}/Images/${selectedPuzzle}.jpg`}
        alt={selectedPuzzle}
      />
    </div>

  );
}

export default Puzzle;
