import { useState } from 'react';

function SubmitTime({ reset, time }) {
  const [errorMessage, setErrorMessage] = useState('');

  function submitScore(name) {
    if (name.length < 3 || name.length > 15) {
      setErrorMessage('Names must be between 3 and 15 characters');
      return;
    }
    // 600 is a magic number as the timer when writing this code was 10 minutes.
    const completionTime = 600 - ((time.minutes * 60) + time.seconds);
    // TODO remove console.log and replace with write function
    console.log(completionTime);
    reset();
  }

  return (
    <div className="post-game">
      <h1>Enter your name and submit your time to the leaderboard!</h1>
      <span>{errorMessage}</span>
      <div className="submit-score-container">
        <input name="name" className="submit-score-input" type="text" />
        <button className="button" type="button" onClick={() => submitScore(document.querySelector('.submit-score-input').value)}>Submit</button>
      </div>
    </div>
  );
}

export default SubmitTime;
