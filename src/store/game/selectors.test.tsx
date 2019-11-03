import { gameBoardSelectors } from './selectors';
import { AppState } from './../store';

const getAppStateFromBoard = (board: Array<string>) : AppState => ({
    game: {
        board
    },
    reports: {
        reports: []
    }
}) 

describe('Game board selectors', () => {

    it('Should find winner', () => {
        const AppState = getAppStateFromBoard([
            'X', 'O', '',
            '', 'X', 'O',
            '', '', 'X',
        ])
        expect(gameBoardSelectors.winnerSelector(AppState)).toBe('X');
    });

    it('Should find if game ended', () => {
        const AppState = getAppStateFromBoard([
            'X', 'O', '',
            '', 'X', 'O',
            '', '', 'X',
        ])
        expect(gameBoardSelectors.gameEndedSelector(AppState)).toBe(true);
    });

    it('Should find if game not ended', () => {
        const AppState = getAppStateFromBoard([
            'X', 'O', '',
            '', 'X', 'O',
            '', '', '',
        ])
        expect(gameBoardSelectors.gameEndedSelector(AppState)).toBe(false);
    });

    it('Should find if game ended in draw', () => {
        const AppState = getAppStateFromBoard([
            'X', 'O', 'X',
            'O', 'X', 'X',
            'O', 'X', 'O',
        ])
        expect(gameBoardSelectors.isDrawSelector(AppState)).toBe(true);
    });

});
