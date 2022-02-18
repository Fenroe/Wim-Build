import { useState } from 'react';
import Game from './Game';

function App() {
  const [gameIsActive, setGameIsActive] = useState(false);

  function startGame() {
    setGameIsActive(true);
  }

  function endGame() {
    setGameIsActive(false);
  }
  return (
    <div className="App">
      <Game gameIsActive={gameIsActive} startGame={startGame} endGame={endGame} />
    </div>
  );
}

export default App;
