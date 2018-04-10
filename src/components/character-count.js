import React from 'react';

const CharacterCount = (props) => {
  return (
    <div>
      Character count: <span>{props.characterCount}</span>
    </div>
  );
};

export default CharacterCount;