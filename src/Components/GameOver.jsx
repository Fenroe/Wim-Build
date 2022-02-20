function GameOver({ reset }) {
  return (
    <div>
      <h1>You ran out of time, Try again!</h1>

      <button type="button" onClick={reset}>Select A Puzzle</button>
    </div>
  );
}

export default GameOver;
