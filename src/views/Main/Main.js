import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import localstorage from 'store2';

import ChooseGame from './views/ChooseGame';
import Loading from '../../common/components/Loading';

class Main extends Component {
  static propTypes = {
    startNewGame: PropTypes.func.isRequired,
    getGameSaves: PropTypes.func.isRequired,
    loadGame: PropTypes.func.isRequired,
    gameSaves: PropTypes.instanceOf(Map).isRequired,
  };

  componentDidMount() {
    const { getGameSaves, loadGame } = this.props;
    const gameInProgress = localstorage.get('gameId');

    if (gameInProgress) {
      loadGame(gameInProgress);
    } else {
      getGameSaves();
    }
  }

  render() {
    const { startNewGame, gameSaves, loadGame, currentGame } = this.props;

    if (!currentGame.get('loaded')) {
      return <Loading />;
    }

    if (!currentGame.get('data').size) {
      return (
        <div>
          <ChooseGame startNewGame={startNewGame} gameSaves={gameSaves.get('data')} onContinue={loadGame} />
        </div>
      );
    }

    return 'Welcome back';
  }
}

export default Main;
