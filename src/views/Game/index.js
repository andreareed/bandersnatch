import { connect } from 'react-redux';
import Game from './Game';

import { startNewGame } from './redux/actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    startNewGame: () => dispatch(startNewGame()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
