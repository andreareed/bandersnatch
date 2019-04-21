import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

class Game extends Component {
  static propTypes = {
    game: PropTypes.instanceOf(Map).isRequired,
  };

  render() {
    return <div />;
  }
}

export default Game;
