import { createStore, combineReducers, applyMiddleware } from 'redux';
import { gameReducer as game, gameSaga, GameBoardState } from './game';
import { reportReducer as reports, reportSaga, ReportState} from './reports';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension';

const appReducers = combineReducers({
  game, reports
});

const sagaMiddleware = createSagaMiddleware();

export interface AppState {
  game: GameBoardState,
  reports: ReportState 
}

export const store = createStore(
  appReducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware) 
  )
);

function* rootSaga() {
  yield all([
    fork(gameSaga),
    fork(reportSaga),
  ]);
}

sagaMiddleware.run(rootSaga);