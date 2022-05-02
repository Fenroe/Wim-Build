import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Leaderboards from './Leaderboards';
import About from './About';

function RouteSwitch() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="https://fenroe.github.io/Wim-Build/" element={<Home />} />
        <Route path="https://fenroe.github.io/Wim-Build/game" element={<Game />} />
        <Route path="https://fenroe.github.io/Wim-Build/leaderboards" element={<Leaderboards />} />
        <Route path="https://fenroe.github.io/Wim-Build/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
