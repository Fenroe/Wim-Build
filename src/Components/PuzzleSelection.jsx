function PuzzleSelection({ startGame, choosePuzzle }) {
  let inputSelected = false;

  let selectedPuzzle = '';

  function checkIfInputSelected(selectedInput) {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => {
      input.checked = false;
    });
    selectedInput.checked = true;
    selectedPuzzle = selectedInput.id;
    inputSelected = true;
  }

  function start() {
    if (inputSelected === true) {
      choosePuzzle(selectedPuzzle);
      startGame();
    }
  }

  return (
    <main className="main">
      <h2 className="puzzle-selection-heading">
        Choose a puzzle from our selection. You will have ten minutes to find three characters
        {' '}
      </h2>
      <fieldset className="puzzle-selection-fieldset">
        <label className="label-1" htmlFor="XBOX 360">XBOX 360</label>
        <input
          className="input-1"
          id="XBOX 360"
          name="XBOX 360"
          type="checkbox"
          onClick={(e) => checkIfInputSelected(e.target)}
        />
        <label className="label-2" htmlFor="PS2">PS2</label>
        <input
          className="input-2"
          id="PS2"
          name="PS2"
          type="checkbox"
          onClick={(e) => checkIfInputSelected(e.target)}
        />
        <label className="label-3" htmlFor="AD 2222">AD 2222</label>
        <input
          className="input-3"
          id="AD 2222"
          name="AD 2222"
          type="checkbox"
          onClick={(e) => checkIfInputSelected(e.target)}
        />
        <button className="puzzle-selection-button" type="button" onClick={start}>Start</button>
      </fieldset>

    </main>
  );
}

export default PuzzleSelection;
