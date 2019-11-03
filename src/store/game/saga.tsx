import { put, select, takeLatest } from 'redux-saga/effects'
import { 
    NEW_GAME,
    LOAD_GAME_DATA,
    UPDATE_BOARD,
    UPDATE_BOARD_COMPLETE,
    gameActionCreators
} from './actions'
import { gameBoardSelectors } from './selectors';

function* fetchGame() {
    try {
        const response = yield fetch('http://localhost:4000/api/game');
        const board = yield response.json();
        yield put(gameActionCreators.loadGameComplete(board));
    } catch (e) {
        console.log(e);
    }
}

function* updateGame() {
    const board = yield select(gameBoardSelectors.boardSelector);
    try {
        yield fetch('http://localhost:4000/api/game', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ board })
        });
        yield put({ type: UPDATE_BOARD_COMPLETE });
    } catch (e) {
        console.log(e);;
    }
}

export function* gameSaga() {
    yield takeLatest(LOAD_GAME_DATA, fetchGame);
    yield takeLatest(UPDATE_BOARD, updateGame);
    yield takeLatest(NEW_GAME, updateGame);
}