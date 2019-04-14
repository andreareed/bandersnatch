import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewGame extends Component {
  static propTypes = {
    startNewGame: PropTypes.func.isRequired,
  };

  render() {
    const { startNewGame } = this.props;

    return (
      <div>
        <h1>Welcome to Bandersnatch</h1>
        <p>This is quite possibly the worst decision you've ever made.</p>
        <div>Continue</div>
        <div onClick={startNewGame}>New Game</div>
        <div>Settings</div>
      </div>
    );
  }
}

export default NewGame;
