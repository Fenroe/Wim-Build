import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './Game';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
