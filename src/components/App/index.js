import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Header from '../Header';
import Container from '../Container';
import Resultinfo from '../ResultInfo';
import { connect } from 'react-redux';
import './App.css';

const App = ({ characters }) => (
  <div className="App">
    <Header />
    <Resultinfo />
    <Container
      characters={characters}
    />
  </div>
);

App.propTypes = {
  characters: PropTypes.array,
}

App.defaultPropTypes = {
  characters: [],
}

const actions = {};

const mapStateToProps = state => ({
  characters: state.characters,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
