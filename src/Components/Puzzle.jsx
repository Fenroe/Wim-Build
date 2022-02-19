import Timer from './Timer';

function Puzzle({ endGame, selectedPuzzle }) {
  return (
    <div>
      <Timer endGame={endGame} />
      <img
        className="puzzle-space"
        src={`${process.env.PUBLIC_URL}/Images/${selectedPuzzle}.jpg`}
        alt={selectedPuzzle}
      />
    </div>

  );
}

export default Puzzle;
