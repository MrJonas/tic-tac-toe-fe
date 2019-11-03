export const NEW_GAME = 'game/NEW_GAME';

export interface StartNewGameAction {
    type: typeof NEW_GAME
};

const startNewGame = () : StartNewGameAction => ({
    type: NEW_GAME 
})

export const UPDATE_BOARD = 'game/UPDATE_BOARD';
export const UPDATE_BOARD_COMPLETE = 'game/UPDATE_BOARD_COMPLETE';
export const UPDATE_BOARD_ERROR = 'game/UPDATE_BOARD_ERROR';

export interface UpdateBoardAction {
    type: typeof UPDATE_BOARD,
    payload: {
        player: string,
        fieldId: number
    }
};

const updateBoard = (player: string, fieldId: number) : UpdateBoardAction => ({
    type: UPDATE_BOARD, 
    payload: {player, fieldId}
})

interface LoadGameAction {
    type: typeof LOAD_GAME_DATA 
}


export const LOAD_GAME_DATA = 'game/LOAD_GAME_DATA';
export const LOAD_GAME_DATA_COMPLETE = 'game/LOAD_GAME_DATA_COMPLETE';
export const LOAD_GAME_DATA_ERROR = 'game/LOAD_GAME_DATA_ERROR';

interface LoadGameAction {
    type: typeof LOAD_GAME_DATA 
}

const loadGame = (): LoadGameAction => ({
    type: LOAD_GAME_DATA
})

interface LoadGameActionComplete {
    type: typeof LOAD_GAME_DATA_COMPLETE,
    payload: {
        board: Array<string>
    }
}

const loadGameComplete = (board: Array<string>): LoadGameActionComplete => ({
    type: LOAD_GAME_DATA_COMPLETE,
    payload: {board}
})

export type GameBoardActionTypes = UpdateBoardAction | StartNewGameAction | LoadGameAction | LoadGameActionComplete;

export const gameActionCreators = {
    startNewGame,
    updateBoard,
    loadGame,
    loadGameComplete
}