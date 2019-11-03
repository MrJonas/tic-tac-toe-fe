import { NEW_GAME, UPDATE_BOARD, LOAD_GAME_DATA_COMPLETE, GameBoardActionTypes } from './actions';

export interface GameBoardState {
    board: Array<string>
};

const defaultState: GameBoardState = {
    board: [...new Array(9).fill('')]
};

export const gameReducer = (
    state: GameBoardState = defaultState,
    action: GameBoardActionTypes): GameBoardState => {
    switch (action.type) {
        case NEW_GAME:
            return defaultState
        case UPDATE_BOARD:
            const { player, fieldId } = action.payload;
            const newBoard = [...state.board];
            newBoard[fieldId] = player;
            return {
                board: newBoard
            }
        case LOAD_GAME_DATA_COMPLETE:
            return {
                board: action.payload.board
            }
        default:
            return state
    }
}