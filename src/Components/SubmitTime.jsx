function SubmitTime({ reset }) {
  return (
    <div>
      <h1>Enter your name and submit your time to the leaderboard!</h1>
      <input type="text" />
      <button type="button" onClick={reset}>Submit</button>
    </div>
  );
}

export default SubmitTime;
