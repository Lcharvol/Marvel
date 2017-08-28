import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { compose, withHandlers, withState } from 'recompose';
import Header from '../Header';
import Container from '../Container';
import CharacterView from '../CharacterView';
import Resultinfo from '../ResultInfo';
import { connect } from 'react-redux';
import './App.css';

const App = ({ characters, resultInfo, toggleCharacter, characterIsVisible }) => (
  <div className="App">
    {characterIsVisible &&
      <CharacterView
        toggleCharacter={toggleCharacter}
      />
    }
    <Header />
    <Resultinfo
      resultInfo={resultInfo}
    />
    <Container
      characters={characters}
      toggleCharacter={toggleCharacter}
    />
  </div>
);

App.propTypes = {
  characters: PropTypes.array.isRequired,
  resultInfo: PropTypes.object.isRequired,
}

const actions = {};

const mapStateToProps = state => ({
  characters: state.characters,
  resultInfo: state.resultInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('characterIsVisible', 'showCharacter', false),
  withHandlers({ toggleCharacter: ({ showCharacter }) => () => showCharacter(characterIsVisible => !characterIsVisible) }),
);

export default enhance(App);
