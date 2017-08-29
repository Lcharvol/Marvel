import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import InfiniteScroll from 'react-infinite-scroller';
import { Spinner } from '@blueprintjs/core';
import Character from '../Character';
import './Container.css';

const Container = ({ characters, toggleCharacter, loadCharacter, loadCharacters }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={() => loadCharacters(characters.length + 25)}
    initialLoad
    hasMore={true || false}
    loader={
      <div className="loader_icon">
        <Spinner
        />
      </div>
    }
    className="container"
  >
    {characters.map((character) =>
      <Character
        key={character.id}
        character={character}
        toggleCharacter={toggleCharacter}
        loadCharacter={loadCharacter}
      />
    )}
  </InfiniteScroll>
);

Container.propTypes = {
  characters: PropTypes.array.isRequired,
  toggleCharacter: PropTypes.func.isRequired,
  loadCharacter: PropTypes.func.isRequired,
  loadCharacters: PropTypes.func.isRequired,
}

const enhance = onlyUpdateForKeys(['characters'])

export default enhance(Container);