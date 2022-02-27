function Header() {
  return (
    <div className="header">
      <a href="/"><span>Wimby</span></a>
      <ul className="nav-menu">
        <li className="nav-menu-item"><a className="nav-menu-link" href="/">Home</a></li>
        <li className="nav-menu-item"><a className="nav-menu-link" href="/game">Play</a></li>
        <li className="nav-menu-item"><a className="nav-menu-link" href="/leaderboards">Leaderboards</a></li>
        <li className="nav-menu-item"><a className="nav-menu-link" href="about">About</a></li>
      </ul>
    </div>
  );
}

export default Header;
