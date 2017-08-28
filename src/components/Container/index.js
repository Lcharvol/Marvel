import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character';
import './Container.css';

const Container = ({ characters }) => (
  <div className="container">
    {characters.map((character) => <Character key={character.id} character={character}/>)}
  </div>
);

Container.propTypes = {
  characters: PropTypes.array.isRequired,
}

export default Container;