import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Leaderboards from './Leaderboards';
import About from './About';

function RouteSwitch() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/leaderboards" element={<Leaderboards />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
