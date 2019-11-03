import React, { useEffect } from 'react';

export interface BoardProps {
    nextPlayer: string,
    board: Array<string>,
    gameEnded: boolean,
    isDraw: boolean,
    winner: string,
    winingCodition: Array<number> | undefined,
    updateBoard(player: string, fieldId: number): void,
    startNewGame(): void,
    loadGame(): void,
}

const Board: React.FC<BoardProps> = ({
    nextPlayer,
    board,
    updateBoard,
    winner,
    gameEnded,
    isDraw,
    winingCodition,
    startNewGame,
    loadGame
}) => {

    useEffect(() => {
        loadGame()
    }, [])

    const handleFieldClick = (i: number) => (!gameEnded && !board[i] && updateBoard(nextPlayer, i))

    const handleButtonClick = () => startNewGame();

    return (
        <React.Fragment>
            <div className="board">
                {board.map((field, i) => (
                    <div key={i}
                        className={`field ${(winingCodition && winingCodition.indexOf(i) !== -1) ? 'winning-field' : ''}`}
                        data-hook={`field-${i}`}
                        onClick={() => handleFieldClick(i)}>
                        {field}
                    </div>))
                }
            </div>
            {!gameEnded && <h2 data-hook="gameStatus">{`${nextPlayer} move next`}</h2>}
            {gameEnded && isDraw && <h2>it's draw!</h2>}
            {gameEnded && !isDraw && <h2>{`${winner} is winner!`}</h2>}
            <button className="button" data-hook="startNewGameButton" onClick={() => handleButtonClick()}>start new game</button>
        </React.Fragment >
    );
}

export default React.memo(Board);
