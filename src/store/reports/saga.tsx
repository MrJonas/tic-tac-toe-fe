import { put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { reportActionCreators, LOAD_REPORT_DATA } from './actions'
import { NEW_GAME, UPDATE_BOARD, UpdateBoardAction } from './../game/'
import { gameBoardSelectors } from './../game/selectors';

const reportMessage = (message: string) => (fetch('http://localhost:4000/api/report', {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ report: { timestamp: new Date(), message} })
}))

function* fechReports() {
    try {
        const response = yield fetch('http://localhost:4000/api/report');
        const reports = yield response.json();
        yield put(reportActionCreators.loadReportsComplete(reports));
    } catch (e) {
        console.log(e);
    }
}

function* reportNewGame() {
    try {
        const response = yield reportMessage('New game has started!') 
        const reports = yield response.json();
        yield put(reportActionCreators.loadReportsComplete(reports));
    } catch (e) {
        console.log(e);
    }
}

function* reportPlayerMove(action: UpdateBoardAction) {
    const isDraw = yield select(gameBoardSelectors.isDrawSelector);
    const winner = yield select(gameBoardSelectors.winnerSelector);
    const { player, fieldId } = action.payload;
    const message = `${player} selected ${fieldId} field. ${winner ? 'And wins a game!' : '' }${isDraw ? 'Game ended in Draw!' : ''}`
    try {
        const response = yield reportMessage(message) 
        const reports = yield response.json();
        yield put(reportActionCreators.loadReportsComplete(reports));
    } catch (e) {
        console.log(e);
    }
}


export function* reportSaga() {
    yield takeLatest(LOAD_REPORT_DATA, fechReports);
    yield takeEvery(NEW_GAME, reportNewGame);
    yield takeEvery(UPDATE_BOARD, reportPlayerMove);
}