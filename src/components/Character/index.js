import React from 'react';
import PropTypes from 'prop-types';

import './Character.css';

const Character = ({ character, toggleCharacter, loadCharacter }) => (
  <div className="character_container" onClick={() => {loadCharacter(character.id, toggleCharacter)}}>
    <div className="shadow">
    <i className="fa fa-ellipsis-h icon" aria-hidden="true"></i>
    </div>
    <div className="image_container">
      <img className="avatar" alt="avatar" src ={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
    </div>
    <div className="name_container">
      <p className="name">{character.name}</p>
    </div>
  </div>
);

Character.propTypes = {
  character: PropTypes.object.isRequired,
  toggleCharacter: PropTypes.func.isRequired,
  loadCharacter: PropTypes.func.isRequired,
}

export default Character;