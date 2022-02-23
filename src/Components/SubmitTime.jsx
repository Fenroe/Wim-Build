function SubmitTime({ reset, time }) {
  function submitScore(name) {
    if (name.length < 3 || name.length > 12) {
      return null;
    }
    // 600 is a magic number as the timer when writing this code was 10 minutes.
    const completionTime = 600 - ((time.minutes * 60) + time.seconds);
    // TODO remove console.log and replace with write function
    console.log(completionTime);
    reset();
    return 1;
  }

  return (
    <div>
      <h1>Enter your name and submit your time to the leaderboard!</h1>
      <input name="name" className="submit-score-input" type="text" />
      <button className="button" type="button" onClick={() => submitScore(document.querySelector('.submit-score-input').value)}>Submit</button>
    </div>
  );
}

export default SubmitTime;
