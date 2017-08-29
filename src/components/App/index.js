import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadCharacters } from '../../actions/loadCharacters';
import Header from '../Header';
import Container from '../Container';
import Resultinfo from '../ResultInfo';
import { connect } from 'react-redux';
import './App.css';

const App = ({ characters, character, resultInfo, loadCharacters }) => (
  <div className="App">
    <Header />
    <Resultinfo
      resultInfo={resultInfo}
    />
    <Container
      characters={characters}
      loadCharacters={loadCharacters}
    />
  </div>
);

App.propTypes = {
  characters: PropTypes.array.isRequired,
  character: PropTypes.array.isRequired,
  resultInfo: PropTypes.object.isRequired,
  loadCharacters: PropTypes.func.isRequired,
}

const actions = { loadCharacters };

const mapStateToProps = state => ({
  characters: state.characters,
  character: state.character,
  resultInfo: state.resultInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
