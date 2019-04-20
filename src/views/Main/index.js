import { connect } from 'react-redux';
import Main from './Main';

import { getGameSaves, startNewGame, loadGame } from './redux/actions';

const mapStateToProps = state => {
  return {
    gameSaves: state.game.gameSaves,
    currentGame: state.game.currentGame,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGameSaves: () => dispatch(getGameSaves()),
    startNewGame: () => dispatch(startNewGame()),
    loadGame: id => dispatch(loadGame(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
