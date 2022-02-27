import { useState } from 'react';
import Header from './Components/Header';
import puzzleData from './Data/puzzleData';
import scoreboardData from './Data/scoreboardData';

function convertTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
}

function renderScores(scoreArray) {
  return scoreArray.map((score) => (
    <tr>
      <td className="score-table-data">{scoreArray.indexOf(score) + 1}</td>
      <td className="score-table-data">{score.name}</td>
      <td className="score-table-data">{convertTime(score.time)}</td>
    </tr>
  ));
}

function filterScores(scoresArray, map) {
  return scoresArray.filter((score) => (score.map === map ? score : null));
}

function sortScores(scoresArray) {
  return scoresArray.sort((a, b) => (a.time - b.time));
}

function handleScores(scoresArray, map) {
  const filteredScores = filterScores(scoresArray, map);
  const sortedScores = sortScores(filteredScores);
  return renderScores(sortedScores);
}

function Leaderboards() {
  const [selectedMap, setSelectedMap] = useState(puzzleData[0].name);

  function handleMenu(array) {
    return array.map((item) => (
      <li key={array.indexOf(item)}>
        <button className={item.name === selectedMap ? 'lb-button-inverse' : 'lb-button'} type="button" onClick={() => setSelectedMap(item.name)}>{item.name}</button>
      </li>
    ));
  }

  return (
    <div className="page-container">
      <Header />
      <main className="leaderboards">
        <h1>Leaderboards</h1>
        <ul className="leaderboards-menu">
          {handleMenu(puzzleData)}
        </ul>
        <table className="scores-table">
          <thead>
            <tr className="scores-table-headings-container">
              <th>
                <h2 className="scores-table-heading">Place</h2>
              </th>
              <th>
                <h2 className="scores-table-heading">Name</h2>
              </th>
              <th>
                <h2 className="scores-table-heading">Time</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {handleScores(scoreboardData, selectedMap)}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Leaderboards;
