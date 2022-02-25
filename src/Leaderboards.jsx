import Header from './Components/Header';
import Scores from './Components/Scores';

function Leaderboards() {
  return (
    <div className="page-container">
      <Header />
      <main>
        <section>
          <h1>XBOX 360</h1>
          <Scores />
        </section>
        <section>
          <h1>PS2</h1>
          <Scores />
        </section>
        <section>
          <h1>AD 2222</h1>
          <Scores />
        </section>
      </main>
    </div>
  );
}

export default Leaderboards;
