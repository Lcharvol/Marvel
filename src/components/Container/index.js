import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router'
import { onlyUpdateForKeys } from 'recompose';
import InfiniteScroll from 'react-infinite-scroller';
import { Spinner } from '@blueprintjs/core';
import Character from '../Character';
import './Container.css';

const Container = ({ characters, loadCharacters }) => (
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
      <Link key={character.id} to={`/characters/${character.id}`}>
        <Character
          character={character}
        />
      </Link>
    )}
  </InfiniteScroll>
);

Container.propTypes = {
  characters: PropTypes.array.isRequired,
  loadCharacters: PropTypes.func.isRequired,
}

const enhance = onlyUpdateForKeys(['characters'])

export default enhance(Container);