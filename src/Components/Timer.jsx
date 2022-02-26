import { useEffect } from 'react';

function Timer({
  time, setTime, timeRanOut, endGame,
}) {
  function startCountdown() {
    const countdown = setInterval(() => {
      if (time.seconds === 0) {
        if (time.minutes !== 0) {
          setTime({
            minutes: time.minutes - 1,
            seconds: 59,
          });
        } else {
          timeRanOut();
          endGame();
        }
      } else {
        setTime({
          minutes: time.minutes,
          seconds: time.seconds - 1,
        });
      }
      clearInterval(countdown);
    }, 1000);
  }

  useEffect(() => {
    startCountdown();
  });

  return (
    <div className="puzzle-timer">
      <h1>
        Time Remaining:
        {' '}
        {time.minutes}
        :
        {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
      </h1>
    </div>
  );
}

export default Timer;
