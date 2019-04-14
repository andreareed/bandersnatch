import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import ChooseGame from './views/ChooseGame';

class Game extends Component {
  static propTypes = {
    startNewGame: PropTypes.func.isRequired,
    getGameSaves: PropTypes.func.isRequired,
    loadGame: PropTypes.func.isRequired,
    gameSaves: PropTypes.instanceOf(List).isRequired,
  };

  componentDidMount() {
    const { getGameSaves } = this.props;

    getGameSaves();
  }

  render() {
    const { startNewGame, gameSaves, loadGame } = this.props;

    return (
      <div>
        <ChooseGame startNewGame={startNewGame} gameSaves={gameSaves} onContinue={loadGame} />
      </div>
    );
  }
}

export default Game;
