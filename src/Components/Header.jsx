import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <a href="/"><span>Wimby</span></a>
      <ul className="nav-menu">
        <Link className="nav-menu-link" to="/">Home</Link>
        <Link className="nav-menu-link" to="/game">Play</Link>
        <Link className="nav-menu-link" to="/leaderboards">Leaderboards</Link>
        <Link className="nav-menu-link" to="/about">About</Link>
      </ul>
    </div>
  );
}

export default Header;
