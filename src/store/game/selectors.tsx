import { createSelector } from 'reselect';
import { AppState } from './../store';

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // collumns
    [0, 4, 8], [2, 4, 6] // diagonals
]
export const getBoard = (state: AppState) => state.game.board;

const getWinningCondition = (board: Array<string>) => {
    const isWin = (f1: string, f2: string, f3: string) => f1 && f2 && f3 && f1 === f2 && f1 === f3 && f2 === f3;
    return winningConditions
        .find((c: Array<number>) => isWin(board[c[0]], board[c[1]], board[c[2]] ));
}

const isDraw = (board: Array<string>) => !getWinningCondition(board) && board.every(field => field);

const boardSelector = createSelector(
    getBoard,
    (x: Array<string>) => x
)
const isDrawSelector = createSelector(
    getBoard,
    isDraw
)

const winningConditionSelector = createSelector(
    getBoard,
    getWinningCondition
);

const gameEndedSelector = createSelector(
    getBoard,
    (board: Array<string>) => !!getWinningCondition(board) || isDraw(board)
)

const winnerSelector = createSelector(
    getBoard,
    (board) => {
        const winCondition = getWinningCondition(board);
        return winCondition ? board[winCondition[0]] : '';
    }
)

const nextPlayerSelector = createSelector(
    getBoard,
    (board: Array<string>) => { 
        const moveCount = board.reduce((a: number, field: string) => !!field ? a + 1 : a, 0);
        return moveCount % 2 === 0 ? 'X' : 'O';
    }
); 


export const gameBoardSelectors = {
    nextPlayerSelector,
    winningConditionSelector,
    isDrawSelector,
    gameEndedSelector,
    winnerSelector,
    boardSelector
}


