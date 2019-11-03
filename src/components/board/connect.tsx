import { connect } from 'react-redux';
import Board from './board';
import {gameActionCreators, gameBoardSelectors} from './../../store/game/';
import { AppState } from './../../store';

const mapStateToProps = (state: AppState) => ({
    nextPlayer: gameBoardSelectors.nextPlayerSelector(state),
    winner: gameBoardSelectors.winnerSelector(state),
    winingCodition: gameBoardSelectors.winningConditionSelector(state),
    isDraw: gameBoardSelectors.isDrawSelector(state),
    gameEnded: gameBoardSelectors.gameEndedSelector(state),
    board: gameBoardSelectors.boardSelector(state)
})
  
const mapDispatchToProps = { 
    updateBoard: gameActionCreators.updateBoard,
    startNewGame: gameActionCreators.startNewGame,
    loadGame: gameActionCreators.loadGame
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)