/* eslint-disable consistent-return */
import characterData from '../Data/characterData';

function Characters({ selectedPuzzle }) {
  function generateCharacterList() {
    // eslint-disable-next-line array-callback-return
    const newCharacterList = characterData.filter((entry) => {
      if (entry.map === selectedPuzzle) {
        return entry;
      }
    });
    return newCharacterList;
  }

  function renderCharacterData() {
    const characterArray = generateCharacterList();
    const relevantCharacterArray = characterArray.map((character) => (
      <li key={characterArray.indexOf(character)}>
        <span>{character.name}</span>
        <span>{character.media}</span>
      </li>
    ));
    return relevantCharacterArray;
  }

  return (
    <div>
      <ul>
        {renderCharacterData()}
      </ul>
    </div>
  );
}

export default Characters;
