import Header from './Components/Header';
import puzzleData from './Data/puzzleData';

function Leaderboards() {
  return (
    <div className="page-container">
      <Header />
      <main className="leaderboards">
        <h1>Leaderboards</h1>
        <ul className="leaderboards-menu">
          {puzzleData.map((puzzle) => (<li><button type="button">{puzzle.name}</button></li>))}
        </ul>
      </main>
    </div>
  );
}

export default Leaderboards;
