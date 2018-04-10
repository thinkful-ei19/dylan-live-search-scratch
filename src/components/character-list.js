import React from 'react';

const CharacterList = (props) => {
  const list = props.characterList.map((character, index) => {
    return <li key={index}><strong>{character.name}:</strong> ({character.actor})-{character.description}</li>;
  });

  return (
    <ul>
      {list}
    </ul>
  );
};

export default CharacterList;