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
    <section>
      <p>
        Choose a puzzle from our selection. You will have thirty minutes to find
        all five characters
        {' '}
      </p>
      <fieldset>
        <label htmlFor="Pokemon Blue">Pokemon Blue</label>
        <input
          id="Pokemon Blue"
          name="Pokemon Blue"
          type="checkbox"
          onClick={(e) => checkIfInputSelected(e.target)}
        />
        <label htmlFor="PSX">PSX</label>
        <input
          id="PSX"
          name="PSX"
          type="checkbox"
          onClick={(e) => checkIfInputSelected(e.target)}
        />
        <label htmlFor="AD 2222">AD 2222</label>
        <input
          id="AD 2222"
          name="AD 2222"
          type="checkbox"
          onClick={(e) => checkIfInputSelected(e.target)}
        />
        <button type="button" onClick={start}>Start</button>
      </fieldset>

    </section>
  );
}

export default PuzzleSelection;
