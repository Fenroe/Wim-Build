function Puzzle({ selectedPuzzle }) {
  console.log(selectedPuzzle);

  return (
    <img
      className="puzzle-space"
      src={`${process.env.PUBLIC_URL}/Images/${selectedPuzzle}.jpg`}
      alt={selectedPuzzle}
    />
  );
}

export default Puzzle;
