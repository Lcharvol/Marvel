import React from 'react';
import PropTypes from 'prop-types';

import './Character.css';

const Character = ({ character }) => (
  <div className="character_container">
    <div className="image_container">
      <img className="avatar" alt="avatar" src ={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
    </div>
    <p className="name">{character.name}</p>
  </div>
);

Character.propTypes = {
  character: PropTypes.object.isRequired,
}

export default Character;