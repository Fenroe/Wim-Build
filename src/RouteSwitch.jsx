import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Leaderboards from './Leaderboards';
import About from './About';

function RouteSwitch() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
