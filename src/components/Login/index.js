import React, { Component } from 'react';
import Header from '../Header';
import { connectUser } from '../../actions/connectUser';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Login.css';

class Login extends Component {
  state = {
    inputValue: ''
  }
  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render () {
    const { connectUser } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="login_container">
        <Header />
          <div className="input_container">
            <input onChange={this.updateInputValue} className="pt-input pt-large" name="login" type="text" placeholder="Login" dir="auto" />
            <button
              onClick={event => {
                event.preventDefault();
                connectUser(inputValue);
              }}
              type="button"
              className="pt-button login_button"
            >
              Login
            </button>
          </div>
      </div>
    );
  }
};

const actions = { connectUser };

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);