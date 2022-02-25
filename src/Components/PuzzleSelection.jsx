/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
function PuzzleSelection({ startGame, setCurrentCharacters, choosePuzzle }) {
  function start(choice) {
    choosePuzzle(choice.dataset.name);
    setCurrentCharacters(choice.dataset.name);
    startGame();
  }

  return (
    <main className="puzzle-selection">
      <h1 className="puzzle-selection-heading">Select An Image</h1>
      <section className="puzzle-selection-grid">
        <div
          className="puzzle-selection-container"
          data-name="XBOX 360"
          onClick={(e) => start(e.target)}
        >
          <label className="puzzle-selection-label" data-name="XBOX 360">XBOX 360</label>
          <img
            className="puzzle-selection-img"
            data-name="XBOX 360"
            src={`${process.env.PUBLIC_URL}/Images/XBOX 360.jpg`}
            alt="XBOX 360"
          />
        </div>
        <div
          className="puzzle-selection-container"
          data-name="PS2"
          onClick={(e) => start(e.target)}
        >
          <label className="puzzle-selection-label" data-name="PS2">PS2</label>
          <img
            className="puzzle-selection-img"
            data-name="PS2"
            src={`${process.env.PUBLIC_URL}/Images/PS2.jpg`}
            alt="PS2"
          />
        </div>
        <div
          className="puzzle-selection-container"
          data-name="AD 2222"
          onClick={(e) => start(e.target)}
        >
          <label className="puzzle-selection-label" data-name="AD 2222">AD 2222</label>
          <img
            className="puzzle-selection-img"
            data-name="AD 2222"
            src={`${process.env.PUBLIC_URL}/Images/AD 2222.jpg`}
            alt="AD 2222"
          />
        </div>
      </section>
    </main>
  );
}

export default PuzzleSelection;
