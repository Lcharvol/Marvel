import React from 'react';
import PropTypes from 'prop-types';

import './Character.css';

const Character = ({ character, toggleCharacter }) => (
  <div className="character_container" onClick={() => toggleCharacter()}>
    <div className="shadow">
    <i className="fa fa-ellipsis-h icon" aria-hidden="true"></i>
    </div>
    <div className="image_container">
      <img className="avatar" alt="avatar" src ={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
    </div>
    <p className="name">{character.name}</p>
  </div>
);

Character.propTypes = {
  character: PropTypes.object.isRequired,
  toggleCharacter: PropTypes.func.isRequired,
}

export default Character;