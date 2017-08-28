import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import Character from '../Character';
import './Container.css';

const Container = ({ characters, toggleCharacter, loadCharacter }) => (
  <div className="container">
    {characters.map((character) =>
      <Character
        key={character.id}
        character={character}
        toggleCharacter={toggleCharacter}
        loadCharacter={loadCharacter}
      />
    )}
  </div>
);

Container.propTypes = {
  characters: PropTypes.array.isRequired,
  toggleCharacter: PropTypes.func.isRequired,
  loadCharacter: PropTypes.func.isRequired,
}

const enhance = onlyUpdateForKeys(['characters'])

export default enhance(Container);