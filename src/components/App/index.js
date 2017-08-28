import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Header from '../Header';
import Container from '../Container';
import Resultinfo from '../ResultInfo';
import { connect } from 'react-redux';
import './App.css';

const App = ({ characters, resultInfo }) => (
  <div className="App">
    <Header />
    <Resultinfo
      resultInfo={resultInfo}
    />
    <Container
      characters={characters}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
