import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { compose, withHandlers, withState } from 'recompose';
import { loadCharacter } from '../../actions/loadCharacter';
import Header from '../Header';
import Container from '../Container';
import CharacterView from '../CharacterView';
import Resultinfo from '../ResultInfo';
import { connect } from 'react-redux';
import './App.css';

const App = ({ characters, character, resultInfo, toggleCharacter, characterIsVisible, loadCharacter }) => (
  <div className="App">
    {characterIsVisible &&
      <CharacterView
        toggleCharacter={toggleCharacter}
        character={character}
      />
    }
    <Header />
    <Resultinfo
      resultInfo={resultInfo}
    />
    <Container
      characters={characters}
      toggleCharacter={toggleCharacter}
      loadCharacter={loadCharacter}
    />
  </div>
);

App.propTypes = {
  characters: PropTypes.array.isRequired,
  character: PropTypes.array.isRequired,
  resultInfo: PropTypes.object.isRequired,
  loadCharacter: PropTypes.func.isRequired,
}

const actions = { loadCharacter };

const mapStateToProps = state => ({
  characters: state.characters,
  character: state.character,
  resultInfo: state.resultInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('characterIsVisible', 'showCharacter', false),
  withHandlers({ toggleCharacter: ({ showCharacter }) => () => showCharacter(characterIsVisible => !characterIsVisible) }),
);

export default enhance(App);
