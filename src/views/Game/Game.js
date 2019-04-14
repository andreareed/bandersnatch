import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewGame from './views/NewGame';

class Game extends Component {
  static propTypes = {
    startNewGame: PropTypes.func.isRequired,
  };

  render() {
    const { startNewGame } = this.props;

    return (
      <div>
        <NewGame startNewGame={startNewGame} />
      </div>
    );
  }
}

export default Game;
