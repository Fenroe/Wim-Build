/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
function FindCharacterMenu({
  characters, coordinates, resetCoordinates, checkIfCharacterFound,
  checkIfAllCharactersFound, finishedInTime,
}) {
  function checkInput(character) {
    checkIfCharacterFound(character);
    resetCoordinates();
    if (checkIfAllCharactersFound()) {
      finishedInTime();
    }
  }

  function renderMenuItems() {
    return characters.map((character) => (
      <li
        className="find-character-menu-item"
        key={characters.indexOf(character)}
        data={character}
        onClick={() => checkInput(characters[characters.indexOf(character)])}
      >
        <span className="find-character-menu-text">{character.name}</span>
      </li>
    ));
  }
  return (
    <ul
      className="find-character-menu"
      style={{
        top: coordinates.yRelative,
        left: coordinates.xRelative,
        display: coordinates.xRelative === null && coordinates.yRelative === null ? 'none' : 'flex',
      }}
    >
      {renderMenuItems()}
    </ul>
  );
}

export default FindCharacterMenu;
