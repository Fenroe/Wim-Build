function Characters({ characters }) {
  function renderCharacterData() {
    const relevantCharacterArray = characters.map((character) => (
      <li style={{ display: character.found === true ? 'none' : null }} className="character-details-container" key={characters.indexOf(character)}>
        <span className="character-name">{character.name}</span>
        <span className="character-media">{character.media}</span>
      </li>
    ));
    return relevantCharacterArray;
  }

  return (
    <ul className="characters-container">
      {renderCharacterData()}
    </ul>
  );
}

export default Characters;
