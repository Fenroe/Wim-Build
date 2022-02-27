function Characters({ characters }) {
  function renderCharacterData() {
    const relevantCharacterArray = characters.map((character) => (
      <li style={{ display: character.found === true ? 'none' : null }} className="character-details-container" key={characters.indexOf(character)}>
        <img src={character.icon} alt={character.name} className="character-icon" />
        <div className="character-text-container">
          <span className="character-name">{character.name}</span>
          <span className="character-media">{character.media}</span>
        </div>
      </li>
    ));
    return relevantCharacterArray;
  }

  return (
    <div className="puzzle-character-container">
      <h1 className="puzzle-character-heading">Characters</h1>
      <ul className="puzzle-character-tracker">
        {renderCharacterData()}
      </ul>
    </div>

  );
}

export default Characters;
