import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'immutable';

class NewGame extends Component {
  static propTypes = {
    startNewGame: PropTypes.func.isRequired,
    onContinue: PropTypes.func.isRequired,
    gameSaves: PropTypes.instanceOf(List),
  };

  getMostRecentGame = () => {
    const { gameSaves, onContinue } = this.props;
    const [mostRecentGame] = gameSaves.sortBy(game => !game.get('updated_at'));

    onContinue(mostRecentGame.get('id'));
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
          <div onClick={this.getMostRecentGame} className={classNames({ disabled: !gameSaves.size })}>
            Continue
          </div>
          <div onClick={startNewGame}>New Game</div>
          <div>Settings</div>
        </div>
      </div>
    );
  }
}

export default NewGame;
