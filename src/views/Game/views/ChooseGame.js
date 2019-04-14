import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class NewGame extends Component {
  static propTypes = {
    startNewGame: PropTypes.func.isRequired,
  };

  render() {
    const { startNewGame, gameSaves } = this.props;

    return (
      <div className="new-game">
        <h1>
          Welcome to <span>Bandersnatch</span>
        </h1>
        <p>This is quite possibly the worst decision you've ever made.</p>
        <div className="new-game__options">
          <div className={classNames({ disabled: !gameSaves.size })}>Continue</div>
          <div onClick={startNewGame}>New Game</div>
          <div>Settings</div>
        </div>
      </div>
    );
  }
}

export default NewGame;
