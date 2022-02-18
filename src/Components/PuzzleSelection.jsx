function PuzzleSelection({ startGame }) {
  return (
    <section>
      <p>
        Choose a puzzle from our selection. You will have thirty minutes to find
        all five characters
        {' '}
      </p>
      <button type="button" onClick={startGame}>Start</button>
    </section>
  );
}

export default PuzzleSelection;
