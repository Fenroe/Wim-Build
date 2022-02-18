function Game() {
  return (
    <div className="game">
      <header>
        <h1>Wimby</h1>
      </header>
      <main>
        <p>
          Choose a puzzle from our selection. You will have thirty minutes to find
          all five characters
          {' '}
        </p>
        <button type="button">Start</button>
      </main>
    </div>
  );
}

export default Game;
