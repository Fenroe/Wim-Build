import { useEffect } from "react";

function GameOver() {
  const apiUrl = 'https://zenquotes.io/api/random/2b48d97cfaa034f20315fb88e019150b4233e26c';

  async function getapi(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getapi(apiUrl);
  }, []);

  return (
    <div>
      <h1>You ran out of time, but don&apos;t give up!</h1>

      <button type="button">Select A Puzzle</button>
    </div>
  );
}

export default GameOver;
