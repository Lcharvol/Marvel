import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character';
import './Container.css';

const Container = ({ characters, toggleCharacter }) => (
  <div className="container">
    {characters.map((character) =>
      <Character
        key={character.id}
        character={character}
        toggleCharacter={toggleCharacter}
      />
    )}
  </div>
);

Container.propTypes = {
  characters: PropTypes.array.isRequired,
  toggleCharacter: PropTypes.func.isRequired,
}

export default Container;